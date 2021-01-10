module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
    // 0: off, 1: warning, 2: error
    'no-unused-vars': 0,
    'import/order': [
      2,
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'unknown'],
        'newlines-between': 'always',
      },
    ],
  },
  settings: {
    'import/resolver': {
      // Allow `@/` to map to `src/client/`
      alias: {
        map: [
          ['@', './src/client'],
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};