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
    'comma-dangle': ['error', 'always-multiline'],
    'array-element-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],

    // function
    'space-before-function-paren': 'off',

    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        // ignoreDeclarationSort: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],
  },
}
