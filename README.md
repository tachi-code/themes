## Tachi Code Themes

## Overview

This repository contains the theme registry for Tachi Code.

Tachi Code themes follow an extended implementation of
the [VS Code color theme schema](https://code.visualstudio.com/api/references/theme-color) and are compatible with the
Tachi Code editor.

## Theme Structure

Raw themes can be defined as `.json`, `.js`, or `.ts` files. Tachi Code's additional workbench colors are defined
in [tachi-code-colors.json](./schemas/tachi-code-colors.json).
These colors typically fallback to standard VS Code colors if not defined in a theme.

## Usage

Tachi code uses the [index.json](./index.json) file to provide a list of themes to the user.
Individual themes are loaded on-demand from the [themes](./themes) directory when the user selects a theme inside
the application. Loaded themes are then cached locally and updated when a version change is detected.

## Shiki tm-themes

This repository is currently primarily composed of a subset of themes from the shiki tm-themes collection.

## VS Code default themes

Dark 2026 and Light 2026 are VS Code's default themes, taken from the
[theme-defaults](https://github.com/microsoft/vscode/tree/main/extensions/theme-defaults) extension of
microsoft/vscode (MIT). `npm run import:vscode` fetches them at the release pinned in
[import-vscode-themes.ts](./import-vscode-themes.ts) and resolves their `include` chains into complete themes.
