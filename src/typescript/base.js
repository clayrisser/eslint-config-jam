module.exports = {
  extends: ['airbnb-typescript/base', 'prettier', '../lib/rules/base.js'],
  parser: '@typescript-eslint/parser',
  rules: {
    'import/prefer-default-export': 'off',
    'no-empty-function': ['error', { allow: ['constructors'] }],
    'no-useless-constructor': 'off'
  }
};
