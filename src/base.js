module.exports = {
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  rules: {
    'arrow-body-style': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-return-assign': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        vars: 'all'
      }
    ],
    'import/no-unresolved': [
      'error',
      {
        ignore: ['^~', '^./lib']
      }
    ],
    'comma-dangle': ['error', 'never']
  }
};
