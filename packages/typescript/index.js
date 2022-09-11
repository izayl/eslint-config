module.exports = {
  extends: [
    '@izayl/eslint-config-basic',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    // off
    // @note: must disable the base rule as it can report incorrect errors
    indent: 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    '@typescript-eslint/indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ['TSTypeParameterInstantiation'],
        offsetTernaryExpressions: false,
      },
    ],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'none', // 'none' or 'semi' or 'comma'
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi', // 'semi' or 'comma'
        requireLast: false,
      },
    }],

  },
}
