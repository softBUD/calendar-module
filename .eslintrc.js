module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['import', 'prettier'],
  rules: {
    'prettier/prettier': 'off', // Prettier 규칙을 끔
  },
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
}
