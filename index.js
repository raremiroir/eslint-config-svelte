/*
 * @rushstack/eslint-patch is used to include plugins as dev
 * dependencies instead of imposing them as peer dependencies
 *
 * https://www.npmjs.com/package/@rushstack/eslint-patch
 */

require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  env: { es6: true },
  extends: [
    "plugin:svelte/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: [
    "import",
    "svelte3",
    "prettier",
    "simple-import-sort",
    "@typescript-eslint",
  ],
  parser: "@typescript-eslint/parser",
  settings: {
    svelte: {
      ignoreWarnings: [
        '@typescript-eslint/no-unsafe-member-access',
      ],
      kit: {
        files: {
          routes: "src/routes",
        }
      }
    }
  },
  overrides: [
    {
      files: ["*.svelte"],
      processor: "@typescript-eslint/parser",
      parserOptions: {
        parser: {
          ts: "@typescript-eslint/parser",
          js: "svelte-eslint-parser",
          typescript: "@typescript-eslint/parser"
        },
      }
    }
  ],
  rules: {
    // Svelte rules
    "svelte/no-dupe-else-if-directives": ["error"],     // disallow duplicate else-if directives
    "svelte/no-dupe-on-directives": ["error"],          // disallow duplicate on directives
    "svelte/no-dupe-style-properties": ["error"],       // disallow duplicate style properties
    "svelte/no-dupe-use-directives": ["error"],         // disallow duplicate use directives
    "svelte/no-dynamic-slot-name": ["error"],           // disallow dynamic slot names
    "svelte/no-at-html-tags": ["warn"],                 // warm when @html is used in expressions
    "svelte/block-lang": ["error", {                    // enforce block languages
      "enforceScriptPresent": true,
      "enforceStylePresent": false,
      "script": "ts",
      "style": ["css", "scss", "postcss", "sass", null],
    }],
    "svelte/button-has-type": ["warn", {                // warn when button element has no type attribute
      "button": true,
      "submit": true,
      "reset": true
    }],
    "svelte/no-at-debug-tags": ["error"],               // disallow debugging syntax
    "svelte/no-ignored-unsubscribe": ["error"],         // disallow ignoring store unsubscribe method
    "svelte/no-reactive-functions": ["error"],          // disallow reactive declarations inside functions
    "svelte/no-reactive-literals": ["error"],           // disallow reactive declarations inside functions
    "svelte/no-unused-svelte-ignore": ["error"],        // disallow unused svelte-ignore comments
    "svelte/no-useless-mustaches": [ "error", {         // disallow unnecessary mustaches
      "ignoreIncludesComment": false,
      "ignoreStringEscape": false
    }],
    "svelte/require-each-key": ["error"],               // require each directive to have a key
    "svelte/prefer-destructured-store-props": ["warn"], // use destructure props syntax with store bindings
    "svelte/require-optimized-style-attribute": ["error"], // https://sveltejs.github.io/eslint-plugin-svelte/rules/require-optimized-style-attribute/
    "svelte/derived-has-same-inputs-outputs": ["warn"], // disallow derived stores without input dependencies
    "svelte/first-attribute-linebreak": [ "error", {    // enforce first attribute line break
      "multiline": "below",
      "singleline": "beside"
    }],
    "svelte/html-closing-bracket-spacing": [ "error", { // enforce html closing bracket spacing
      "startTag": "never",        // <div>
      "endTag": "never",          // </div>
      "selfClosingTag": "always"  // <div />
    }],
    "svelte/html-quotes": [ "error", {                  // enforce html attribute quotes
      "prefer": "double",
      "dynamic": {
        "quoted": false,
        "avoidInvalidUnquotedInHTML": false
      }
    }],
    "svelte/indent": ["error", {                        // svelte indentation
      "indent": 2,
      "ignoredNodes": [],
      "switchCase": 1,
      "alignAttributesVertically": true,
    }],
    "svelte/max-attributes-per-line": ["error", {       // limit attributes per line
      "multiline": 1,
      "singleline": 2
    }],
    "svelte/mustache-spacing": [ "error", {             // enforce mustache binding spacing
      "textExpressions": "never",
      "attributesAndProps": "never",
      "directiveExpressions": "never",
      "tags": {
        "openingBrace": "never",
        "closingBrace": "never"
      }
    }],
    "svelte/no-extra-reactive-curlies": [ "error" ],    // disallow unnecessary reactive syntax
    "svelte/no-spaces-around-equal-signs-in-attribute": [ "error" ],
    "svelte/prefer-style-directive": [ "warn" ],        // prefer style directive over style attribute
    "svelte/shorthand-attribute": [ "error", {          // require shorthand attributes
      "prefer": "always" 
    }],
    "svelte/shorthand-directive": [ "error", {          // require shorthand directives
      "prefer": "always" 
    }],
    "svelte/spaced-html-comment": [ "error", "always" ],// enforce spaced html comments
    "svelte/no-inner-declarations": [ "error", "functions" ], // disallow inner declarations
    "svelte/no-trailing-spaces": [ "error" ],           // disallow trailing spaces
    // Other rules
    "object-curly-spacing": ["warn", "always"],
    "import/no-anonymous-default-export": "off",
    "no-unused-vars": "off",
    "no-console": ["warn", { allow: ["warn", "error", "info"] }],
    // TypeScript specific rules
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        allowSingleExtends: false, 
      },
    ],
    "@typescript-eslint/array-type": ["warn"],
    "@typescript-eslint/no-non-null-assertion": ["warn"],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "import/newline-after-import": ["error", { count: 1 }],
    "simple-import-sort/imports": [
      "warn",
      {
        groups: [
          ["^\\u0000"],
          ["^@?\\w"],
          ["^config"],
          ["^[^.]"],
          ["^assets"],
          ["^packages"],
          ["^utils"],
          [
            "^types|^store|^services|^constants|^hooks|^theme|^connectors|^queries",
          ],
          ["^pages"],
          ["^components"],
          ["^\\."],
        ],
      },
    ],
    "simple-import-sort/exports": "warn",
  },
};
