import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      "@next/next/no-img-element": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  globalIgnores([
    ".next/**",
    ".git/**",
    ".vscode/**",
    "public/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "**/node_modules/",
  ]),
  prettier,
]);

export default eslintConfig;
