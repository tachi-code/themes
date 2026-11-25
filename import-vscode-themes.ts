import chalk from "chalk";
import { createHash } from "node:crypto";
import { promises as fs } from "fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "url";
import { parse, ParseError, printParseErrorCode } from "jsonc-parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rawThemesDir = path.join(__dirname, "rawThemes");

// Upstream source: the theme-defaults extension of microsoft/vscode (MIT),
// pinned to the commit of a released tag.
const VSCODE_TAG = "1.148.0";
const VSCODE_COMMIT = "661626d0e72f97806550790a98fb87116c9db825";
const THEMES_PATH = "extensions/theme-defaults/themes";

interface ThemeSource {
  name: string;
  // The label VS Code shows for the theme (extensions/theme-defaults/package.nls.json)
  displayName: string;
  type: "dark" | "light";
  file: string;
}

const THEMES: ThemeSource[] = [
  {
    name: "dark-2026",
    displayName: "Dark 2026",
    type: "dark",
    file: "2026-dark.json",
  },
  {
    name: "light-2026",
    displayName: "Light 2026",
    type: "light",
    file: "2026-light.json",
  },
];

interface ResolvedTheme {
  colors: Record<string, string>;
  tokenColors: unknown[];
  semanticHighlighting: boolean;
  semanticTokenColors: Record<string, unknown>;
}

const fetchThemeFile = async (file: string): Promise<string> => {
  const url = `https://raw.githubusercontent.com/microsoft/vscode/${VSCODE_COMMIT}/${THEMES_PATH}/${file}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }
  return response.text();
};

// An including theme sets a color to "default" to drop the included value.
const mergeColors = (
  target: Record<string, string>,
  source: Record<string, string>,
) => {
  for (const [key, value] of Object.entries(source)) {
    if (value === "default") {
      delete target[key];
    } else {
      target[key] = value;
    }
  }
};

// A redefined selector replaces the included one and moves to the end, which
// is the order VS Code ends up with when it appends an including theme's rules.
const mergeSemanticTokenColors = (
  target: Record<string, unknown>,
  source: Record<string, unknown>,
) => {
  for (const [key, value] of Object.entries(source)) {
    delete target[key];
    target[key] = value;
  }
};

// Resolves a theme the way VS Code loads it: the included theme first, then
// this file's colors over it, its token rules after the included ones, and
// its semantic token rules over the included ones.
const resolveTheme = async (
  file: string,
  sources: string[],
): Promise<ResolvedTheme> => {
  const text = await fetchThemeFile(file);
  sources.push(text);

  const errors: ParseError[] = [];
  const content = parse(text, errors, { allowTrailingComma: true });
  if (errors.length > 0) {
    throw new Error(
      `Failed to parse ${file}: ${errors.map((e) => printParseErrorCode(e.error)).join(", ")}`,
    );
  }

  const resolved: ResolvedTheme = content.include
    ? await resolveTheme(
        path.posix.join(path.posix.dirname(file), content.include),
        sources,
      )
    : {
        colors: {},
        tokenColors: [],
        semanticHighlighting: false,
        semanticTokenColors: {},
      };

  if (
    content.tokenColors !== undefined &&
    !Array.isArray(content.tokenColors)
  ) {
    throw new Error(`${file}: tokenColors must be an array of rules`);
  }

  mergeColors(resolved.colors, content.colors ?? {});
  resolved.tokenColors.push(...(content.tokenColors ?? []));
  resolved.semanticHighlighting ||= content.semanticHighlighting === true;
  mergeSemanticTokenColors(
    resolved.semanticTokenColors,
    content.semanticTokenColors ?? {},
  );

  return resolved;
};

const importThemes = async (): Promise<void> => {
  console.log(
    chalk.blue(
      `Importing ${THEMES.length} themes from microsoft/vscode ${VSCODE_TAG} (${VSCODE_COMMIT})\n`,
    ),
  );

  let errorCount = 0;

  for (const { name, displayName, type, file } of THEMES) {
    try {
      const sources: string[] = [];
      const themeData = await resolveTheme(file, sources);

      // Hash every file of the include chain, so that a change to an
      // included theme counts as a change to this one.
      const hash = createHash("sha256")
        .update(sources.join("\n"))
        .digest("base64url");

      // Keep the version while the upstream content is unchanged, bump it otherwise
      const outputPath = path.join(rawThemesDir, `${name}.ts`);
      let version = "1.0.0";
      let isUpdate = false;

      // The committed file is formatted by Prettier, so it is loaded as a
      // module rather than parsed as JSON.
      const existingTheme = await fs.access(outputPath).then(
        async () => (await import(pathToFileURL(outputPath).href)).default,
        () => undefined,
      );
      if (existingTheme) {
        version = existingTheme.version || "1.0.0";
        if (existingTheme.hash !== hash) {
          const [major, minor, patch] = version.split(".").map(Number);
          version = `${major}.${minor + 1}.${patch}`;
          isUpdate = true;
        }
      }

      const completeTheme = {
        name,
        displayName,
        description: `${displayName} theme`,
        version,
        author: "Microsoft",
        license: "MIT",
        repository: `https://github.com/microsoft/vscode/blob/${VSCODE_COMMIT}/${THEMES_PATH}/${file}`,
        type,
        hash,
        ...themeData,
      };

      const tsContent = `export default ${JSON.stringify(completeTheme, null, 2)};\n`;
      await fs.writeFile(outputPath, tsContent);

      console.log(
        chalk.green(
          `✅ ${isUpdate ? "Updated" : "Imported"}: ${chalk.bold(displayName)} (${name}) - v${version}`,
        ),
      );
    } catch (error) {
      console.error(
        chalk.red(
          `❌ Error importing ${name}: ${error instanceof Error ? error.message : String(error)}`,
        ),
      );
      errorCount++;
    }
  }

  if (errorCount > 0) {
    process.exitCode = 1;
  }
};

await importThemes();
