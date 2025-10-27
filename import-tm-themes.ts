import chalk from "chalk";
import { promises as fs } from "fs";
import path from "node:path";
import { fileURLToPath } from "url";
import { themes } from "tm-themes";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rawThemesDir = path.join(__dirname, "rawThemes");

// Themes to exclude from import (already available from other sources)
const EXCLUDED_THEMES = [
  "dark-modern",
  "light-modern",
  "dark-plus",
  "nord",
  "armada",
  "vitesse-dark",
  "tokyo-night",
  "rose-pine",
  "rose-pine-moon",
  "one-dark-pro",
  "night-owl",
  "material-theme",
  "light-plus",
  "github-light",
  "github-dark",
  "everforest-light",
  "everforest-dark",
  "catppuccin-mocha",
  "catppuccin-macchiato",
  "catppuccin-latte",
  "catppuccin-frappe",
  "ayu-dark",
  "github-dark-high-contrast",
  "github-light-high-contrast",
  "dark-high-contrast",
  "light-high-contrast",
  "aurora-x", // excluded due to GPL license
];

const MANUAL_AUTHORS: Record<string, string> = {
  "github-dark-default": "GitHub",
  "github-dark-dimmed": "GitHub",
  "github-light-default": "GitHub",
  "solarized-dark": "Microsoft",
  "solarized-light": "Microsoft",
};

interface ThemeInfo {
  name: string;
  type: "dark" | "light";
  displayName: string;
  source: string;
  license?: string;
  licenseUrl?: string;
  hash: string;
}

const importThemes = async (): Promise<void> => {
  try {
    console.log(chalk.blue(`Found ${themes.length} themes in tm-themes`));
    console.log(chalk.blue("Starting import...\n"));

    let successCount = 0;
    let errorCount = 0;
    let skippedCount = 0;
    let updatedCount = 0;
    const missingAuthors: Array<{ name: string; displayName: string }> = [];

    for (const themeInfo of themes as ThemeInfo[]) {
      try {
        const { name, displayName, type, source, license, hash } = themeInfo;

        // Skip excluded themes
        if (EXCLUDED_THEMES.includes(name)) {
          console.log(
            chalk.gray(
              `⏭️  Skipped: ${chalk.bold(displayName)} (${name}) - excluded`,
            ),
          );
          skippedCount++;
          continue;
        }

        // Read the theme JSON file from tm-themes
        const themeJsonPath = path.join(
          __dirname,
          "node_modules",
          "tm-themes",
          "themes",
          `${name}.json`,
        );

        const themeJsonContent = await fs.readFile(themeJsonPath, "utf-8");
        const themeData = JSON.parse(themeJsonContent);

        // Determine author from various sources
        let author: string;
        if (MANUAL_AUTHORS[name]) {
          // Use manual mapping if available
          author = MANUAL_AUTHORS[name];
        } else {
          // Try to extract from funding, source URL, or mark as unknown
          const fundingHandle = (themeInfo as any).funding?.[0]?.handle;
          const repoOwner = source
            ? new URL(source).pathname.split("/")[1]
            : null;
          author = fundingHandle || repoOwner || "";

          // Track themes with missing or empty author
          if (!author || author.trim() === "") {
            missingAuthors.push({ name, displayName });
            author = "Unknown";
          }
        }

        if (!license) {
          throw new Error(`License information missing for theme: ${name}`);
        }

        // Check if theme already exists and compare hashes
        const outputPath = path.join(rawThemesDir, `${name}.ts`);
        let version = "1.0.0";
        let isUpdate = false;

        try {
          const existingContent = await fs.readFile(outputPath, "utf-8");
          // Extract the JSON from the TypeScript export
          const jsonMatch = existingContent.match(
            /export default ({[\s\S]*});/,
          );
          if (jsonMatch) {
            const existingTheme = JSON.parse(jsonMatch[1]);
            if (existingTheme.hash && existingTheme.hash !== hash) {
              // Hash changed, increment version
              const [major, minor, patch] = (existingTheme.version || "1.0.0")
                .split(".")
                .map(Number);
              version = `${major}.${minor + 1}.${patch}`;
              isUpdate = true;
            } else if (existingTheme.hash === hash) {
              // Hash unchanged, keep existing version
              version = existingTheme.version || "1.0.0";
            }
          }
          //@ts-expect-error no-unused-vars
        } catch (_) {
          // File doesn't exist or couldn't be read, use default version
        }

        // Create the complete theme object with metadata
        const completeTheme = {
          name,
          displayName,
          description: `${displayName} theme`,
          version,
          author: author,
          license: license,
          repository: source,
          type,
          hash,
          ...themeData,
        };

        // Write to rawThemes as TypeScript file
        const tsContent = `export default ${JSON.stringify(completeTheme, null, 2)};\n`;

        await fs.writeFile(outputPath, tsContent);

        if (isUpdate) {
          console.log(
            chalk.cyan(
              `🔄 Updated: ${chalk.bold(displayName)} (${name}) - v${version}`,
            ),
          );
          updatedCount++;
        } else {
          console.log(
            chalk.green(
              `✅ Imported: ${chalk.bold(displayName)} (${name}) - v${version}`,
            ),
          );
        }
        successCount++;
      } catch (error) {
        console.error(
          chalk.red(
            `❌ Error importing ${themeInfo.name}: ${error instanceof Error ? error.message : String(error)}`,
          ),
        );
        errorCount++;
      }
    }

    console.log(
      chalk.green.bold(
        `\n🎉 Import completed: ${chalk.cyan(successCount)} successful${updatedCount > 0 ? ` (${chalk.cyan(updatedCount)} updated)` : ""}, ${chalk.gray(skippedCount)} skipped, ${chalk.red(errorCount)} failed`,
      ),
    );

    // Display themes with missing author information
    if (missingAuthors.length > 0) {
      console.log(
        chalk.yellow(
          `\n⚠️  ${missingAuthors.length} theme(s) are missing author information:`,
        ),
      );
      console.log(
        chalk.yellow(
          "\nAdd these to the MANUAL_AUTHORS map in import-tm-themes.ts:\n",
        ),
      );
      console.log(
        chalk.gray("const MANUAL_AUTHORS: Record<string, string> = {"),
      );
      for (const { name, displayName } of missingAuthors) {
        console.log(chalk.gray(`  "${name}": "", // ${displayName}`));
      }
      console.log(chalk.gray("};"));
    } else {
      console.log(chalk.green("\n✨ All themes have author information!"));
    }
  } catch (err) {
    console.error(chalk.red.bold(`\n💥 Error importing themes:`), err);
  }
};

await importThemes();
