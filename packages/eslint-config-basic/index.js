module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: ['standard', 'plugin:import/errors', 'plugin:import/warnings'],
  rules: {
    // import
    'import/order': 'error',
    'import/first': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': 'off',
    'import/no-absolute-path': 'off',

    // common
    'no-unused-vars': 'warn',
    'space-before-function-paren': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],

    // function
    'space-before-function-paren': 'off',
  },
}
