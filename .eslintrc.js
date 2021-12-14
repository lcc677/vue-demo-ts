module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es6': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/recommended',
    '@vue/typescript'
  ],

  'parserOptions': {
    'ecmaVersion': 11,
    'sourceType': 'module',
    'parser': '@typescript-eslint/parser'
  },

  // 'plugins': [
  //     'vue'
  // ],
  'rules': {
    'quotes': ['error', 'single'], // 字符串单引号还是双引号,可修复
    'no-unexpected-multiline': 2,
    'vue/max-attributes-per-line':0
  }
};
