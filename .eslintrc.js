module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended', 'prettier'],
  plugins: ['prettier', 'react'],
  env: {
    node: true,
    browser: true,
    jest: true,
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  }
};