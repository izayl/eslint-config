module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    '@izayl/eslint-config-ts',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'jsx-quotes': [
      'error',
      'prefer-double',
    ],
    'react/prop-types': 'off',
  },
}
