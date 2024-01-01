module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:node/recommended"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    // Enforce semicolons
    semi: ["error", "always"],

    // Enforce consistent indentation
    indent: ["error", 2],

    // Enforce spacing before and after operators
    "space-infix-ops": "error",

    // Require spaces around blocks
    "block-spacing": "error",

    // Enforce consistent quotes
    quotes: ["error", "single"],

    // Prevent missing parentheses around arrow function arguments
    "arrow-parens": ["error", "always"],

    // Require braces around arrow function bodies
    "arrow-body-style": ["error", "always"],

    // Enforce consistent naming conventions (e.g., camelCase for variables)
    camelcase: "error",

    // Prevent unused variables
    "no-unused-vars": "error",

    // Prevent dangling commas
    "comma-dangle": ["error", "never"],

    // Enforce consistent use of console.log
    "node/no-extraneous-require": ["error", { allowModules: ["console"] }],
  },
};
