module.exports = {
  env: {
      browser: true,
      es2021: true,
  },
  // extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaFeatures: {
          jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    "@typescript-eslint/no-this-alias": ["off"],  
    'prettier/prettier': 'error',
    "@typescript-eslint/no-explicit-any": ["off"]
  },
  // settings: {
  //     'import/resolver': {
  //         node: {
  //             extensions: ['.js', '.jsx', '.ts', '.tsx'],
  //         },
  //     },
  // },
};

