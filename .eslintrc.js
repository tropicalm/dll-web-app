module.exports = {
  extends: ["prettier", "eslint:recommended", "plugin:react/recommended"],
  plugins: ["react", "prettier", "chai-expect"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  rules: {
    "import/no-unresolved": "off",
    "no-console": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "no-case-declarations": "off",
  },
  globals: {
    React: "writable",
  },

  env: {
    es6: true,
    browser: true,
    node: true,
  },
  settings: {
    react: {
      createClass: "createReactClass", // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: "React", // Pragma to use, default to "React"
      version: "detect", // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
    },
  },
};
