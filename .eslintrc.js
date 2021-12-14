module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  'parserOptions': {
    'ecmaVersion': 13,
    'sourceType': 'module'
  },
  // 'plugins': [
  //     'vue'
  // ],
  'rules': {
    'quotes': ['error', 'single'], // 字符串单引号还是双引号,可修复
  }
};
