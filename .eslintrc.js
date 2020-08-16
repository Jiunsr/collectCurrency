module.exports = {
  root: false,
  env: {
    node: false
  },
  'extends': [
    'standard',
    'plugin:vue/recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'eslint-disable': true
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
