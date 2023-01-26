module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb", "plugin:prettier/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier", "html"],
  rules: {
    "no-unused-vars": "warn",
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
  settings: {
    "html/xml-extensions": [".html"],
  },
};
