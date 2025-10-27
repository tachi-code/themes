import chalk from "chalk";
import path from "node:path";
import { promises as fs } from "fs";
import { fileURLToPath } from "url";
// @ts-expect-error - complaining about missing types
import Ajv2020 from "ajv/dist/2020";
import { ErrorObject } from "ajv/lib/types/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Parse command line arguments
const args = process.argv.slice(2);
const strictMode = args.includes("--strict");

const schemasDir = path.join(__dirname, "schemas");
const rawThemesDir = path.join(__dirname, "rawThemes");
const indexFilePath = path.join(__dirname, "index.json");
const themesOutputDir = path.join(__dirname, "themes"); // New output directory

interface ThemeData {
  displayName: string;
  name: string;
  type?: "light" | "dark" | "hcDark" | "hcLight";
  version: string;
  author?: string;
}

// Import file dynamically
const importFile = async (filePath: string): Promise<any> => {
  const modulePath = `./${path.relative(__dirname, filePath)}`;
  return import(modulePath);
};

const build = async (): Promise<void> => {
  const index: { themes: ThemeData[] } = {
    themes: [],
  };

  try {
    // Create themes directory if it doesn't exist
    await fs.mkdir(themesOutputDir, { recursive: true });
    console.log(
      chalk.blue(`📁 Created themes output directory at ${themesOutputDir}`),
    );

    console.log(chalk.blue("🔍 Loading schemas..."));

    // Use fs to get schema file paths
    const schemaFiles = await fs.readdir(schemasDir);
    const schemas: Record<string, any> = {};

    // Load each schema using dynamic imports
    for (const file of schemaFiles) {
      if (!file.endsWith(".json")) continue;

      const filePath = path.join(schemasDir, file);
      try {
        const schemaModule = await importFile(filePath);
        const schemaData = schemaModule.default;

        // Use the $id property from the schema or generate one
        const schemaId =
          schemaData.$id || `tachi-code://schemas/${file.replace(".json", "")}`;
        schemas[schemaId] = schemaData;
        console.log(chalk.blue(`📜 Loaded schema: ${schemaId}`));
      } catch (error) {
        console.error(chalk.red(`❌ Error loading schema ${file}:`), error);
      }
    }

    const mainSchemaId = "tachi-code://schemas/color-theme";
    const mainSchema = schemas[mainSchemaId];

    if (!mainSchema) {
      throw new Error(`Main schema ${mainSchemaId} not found`);
    }

    // Create Ajv instance with correct configuration
    const ajv = new Ajv2020({
      allowUnionTypes: true,
      allErrors: true,
      strict: false,
    });

    // Add custom keywords
    ajv.addKeyword("allowComments");
    ajv.addKeyword("allowTrailingCommas");
    ajv.addKeyword("patternErrorMessage");
    ajv.addKeyword("defaultSnippets");
    ajv.addFormat("color-hex", (value: string) =>
      /^(#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})(?:[0-9A-Fa-f]{2})?)$/.test(value),
    );

    // Register all schemas by their URI
    for (const [id, schema] of Object.entries(schemas)) {
      console.log(chalk.blue(`📜 Registering schema: ${id}`));
      ajv.addSchema(schema, id);
    }

    const validate = ajv.compile(mainSchema);

    console.log(
      chalk.blue(
        `🔍 Scanning themes directory... ${strictMode ? chalk.yellow("[STRICT MODE]") : chalk.gray("[lenient mode]")}`,
      ),
    );
    // Use fs to get the theme file paths
    const files = await fs.readdir(rawThemesDir);
    let validCount = 0;
    let invalidCount = 0;
    let warningCount = 0;

    for (const file of files) {
      const filePath = path.join(rawThemesDir, file);
      const stats = await fs.stat(filePath);

      if (
        !stats.isFile() ||
        !["json", "ts", "js"].includes(file.split(".").pop()!)
      )
        continue;

      try {
        // Use dynamic import instead of fs.readFile
        const themeModule = await importFile(filePath);
        const themeData = themeModule.default;

        if (
          !themeData ||
          !themeData.name ||
          !themeData.displayName ||
          !themeData.version ||
          !themeData.type ||
          !themeData.author
        ) {
          console.warn(
            chalk.yellow(`⚠️ ${file} does not contain a valid theme.`),
          );
          continue;
        }

        // Validate theme against schema
        const isValid = validate(themeData);

        if (!isValid) {
          if (strictMode) {
            // In strict mode, fail the theme
            console.error(chalk.red(`❌ Theme ${file} failed validation:`));
            console.error(
              validate.errors
                ?.map(
                  (error: ErrorObject) =>
                    `${error.instancePath || "/"} ${error.message}: ${JSON.stringify(error.params, null, 2)}`,
                )
                .join("\n"),
            );
            invalidCount++;
            continue;
          } else {
            // In non-strict mode, warn but still process the theme
            console.warn(
              chalk.yellow(
                `⚠️  Theme ${file} has validation warnings (use --strict to fail)`,
              ),
            );
            warningCount++;
          }
        }

        const { displayName, name, version, type, author } = themeData;

        index.themes.push({ displayName, name, version, type, author });

        // Write the complete theme data to themes directory
        const outputFilename = `${name}.json`;
        const outputPath = path.join(themesOutputDir, outputFilename);
        await fs.writeFile(outputPath, JSON.stringify(themeData, null, 2));

        if (isValid) {
          console.log(
            chalk.green(`✅ Added theme: ${chalk.bold(displayName)} - ${name}`),
          );
          console.log(chalk.blue(`   ↳ Saved to ${outputFilename}`));
          validCount++;
        } else {
          console.log(
            chalk.yellow(
              `⚠️  Added theme with warnings: ${chalk.bold(displayName)} - ${name}`,
            ),
          );
          console.log(chalk.blue(`   ↳ Saved to ${outputFilename}`));
        }
      } catch (error) {
        console.error(chalk.red(`❌ Error processing file ${file}:`), error);
        invalidCount++;
      }
    }

    await fs.writeFile(indexFilePath, JSON.stringify(index, null, 2));
    console.log(
      chalk.green.bold(
        `\n🎉 Index file created successfully with ${chalk.cyan(index.themes.length)} themes.`,
      ),
    );

    if (strictMode) {
      console.log(
        chalk.blue(
          `📊 Summary: ${chalk.green(`${validCount} valid`)} / ${chalk.red(`${invalidCount} invalid`)} themes`,
        ),
      );
    } else {
      console.log(
        chalk.blue(
          `📊 Summary: ${chalk.green(`${validCount} valid`)} / ${chalk.yellow(`${warningCount} with warnings`)} / ${chalk.red(`${invalidCount} errors`)} themes`,
        ),
      );
    }

    console.log(chalk.blue(`📦 Valid themes written to ${themesOutputDir}`));
  } catch (err) {
    console.error(chalk.red.bold(`\n💥 Error generating index:`), err);
  }
};

await build();
