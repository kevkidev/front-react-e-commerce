module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
    es2021: true,
  },
  globals: {
    document: false,
    jsdom: true,
    JSX: true,
    React: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "no-comments", "prettier", "import"],
  rules: {
    "no-console": "warn",
    "no-comments/disallowComments": "warn",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "prettier/prettier": "error",
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
};
