module.exports = {
  env: {
    node: true,
    commonjs: true,
    es6: true,
  },
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
  //  'plugin:@typescript-eslint/recommended',
  ],
  //parser: '@typescript-eslint/parser',
  ignorePatterns: ['.eslintrc.js', 'node_modules'],
  //parserOptions: {
  //  project: 'tsconfig.json',
  //  tsconfigRootDir: __dirname,
  //  sourceType: 'module',
  //},
  //plugins: ['@typescript-eslint', '@typescript-eslint/eslint-plugin'],
  //rules: {
  //  '@typescript-eslint/interface-name-prefix': 'warn',
  //  '@typescript-eslint/no-unused-vars': 'error',
  //  '@typescript-eslint/no-explicit-any': 'error',
  //},
};