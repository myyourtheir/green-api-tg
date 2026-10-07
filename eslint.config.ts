import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import pluginReactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

const files = ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"];
export default defineConfig([
  {
    files,
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  {
    files,
    ignores: ["./src/shared/ui/schadcn/**/*"],
    settings: { react: { version: "detect" } },
    extends: [pluginReactHooks.configs.flat.recommended],
  },
  {
    files,
    plugins: { "simple-import-sort": simpleImportSort },
    languageOptions: {
      parser: tseslint.parser,
      sourceType: "module",
      ecmaVersion: "latest",
      globals: {
        browser: true,
        es2021: true,
      },
    },
    rules: {
      "react/no-unknown-property": "off",
      "react-hooks/immutability": "off",
      "react-hooks/incompatible-library": "off",
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/refs": "off",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-case-declarations": "off",
      "@typescript-eslint/no-unused-expressions": [
        "warn",
        { allowShortCircuit: true, allowTernary: true },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
          caughtErrors: "none",
        },
      ],
      "react/react-in-jsx-scope": "off",
      "prefer-const": "warn",
      "simple-import-sort/imports": [
        "warn",
        {
          groups: [
            [
              "^react",
              "^@?\\w",
              "^(@|components)(/.*|$)",
              "^~",
              "^\\u0000",
              "^\\.\\.(?!/?$)",
              "^\\.\\./?$",
              "^\\./(?=.*/)(?!/?$)",
              "^\\.(?!/?$)",
              "^\\./?$",
              "^.+\\.s?css$",
            ],
          ],
        },
      ],
      "simple-import-sort/exports": "warn",
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    rules: { "react/prop-types": "off" },
  },
  globalIgnores([".next/**", "dist/**", "next-env.d.ts", "./*.{ts,js}"]),
]);
