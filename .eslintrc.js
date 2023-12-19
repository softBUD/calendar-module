// .eslintrc.js
module.exports = {
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["import", "prettier"],
  rules: {},
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
};
