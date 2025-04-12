import { defineConfig, globalIgnores } from "eslint/config";
export default defineConfig([
  globalIgnores([".config/", "dist/", "tsconfig.json", 'Resources']),
])
