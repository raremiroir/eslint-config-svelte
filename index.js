/*
 * @rushstack/eslint-patch is used to include plugins as dev
 * dependencies instead of imposing them as peer dependencies
 *
 * https://www.npmjs.com/package/@rushstack/eslint-patch
 */

const { parserOptions } = require("eslint-plugin-import/config/react");

require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    extraFileExtensions: [".svelte"],
  },
  extends: [
    'eslint:recommended',
    "plugin:svelte/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:prettier/recommended",
    "prettier",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  plugins: [
    "import",
    "prettier",
    "simple-import-sort",
    "@typescript-eslint",
  ],
  ignorePatterns: [".cjs"],
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
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
    es6: true,
		browser: true,
		es2017: true,
		node: true
	},
  overrides: [
    {
      files: ["*.svelte"],
			parser: 'svelte-eslint-parser',
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
    // Base eslint rules
    "no-compare-neg-zero": "error",
    "no-const-assign": "error",
    "no-constant-condition": "error",
    "no-debugger": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "error",
    "no-empty-pattern": "error",
    "no-unused-vars": ["warn", { args: "none" }],
    "arrow-body-style": ["error", "as-needed"],
    "no-console": ["error", { allow: ["warn", "error", "info"] }],
    "no-continue": "error",
    "no-empty": "warn",
    "no-empty-function": "warn",
    "no-empty-static-block": "warn",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-destructuring": "error",
    "prefer-exponentiation-operator": "warn",
    "prefer-object-spread": "error",
    "prefer-spread": "error",
    "require-await": "error",
    "sort-vars": "error",
    "yoda": "error",
    "object-curly-spacing": ["warn", "always"],
    // Svelte rules
    "svelte/no-dupe-else-if-blocks": ["error"],         // disallow duplicate else-if blocks
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
    "svelte/sort-attributes": [ "error", {              // sort attributes
      "order": [
        "slot",
        "this",
        "bind:this",
        "id",
        "name",
        "key",
        "type",
        "ref",
        { // other attributes. (Alphabetical order within the same group.)
          "match": ["!/:/u", "!/^(?:this|id|name|style|class)$/u", "!/^--/u"],
          "sort": "alphabetical"
        },
        ["/^bind:/u", "!bind:this", "/^on:/u"],                 // `bind:` directives (other then `bind:this`), and `on:` directives.
        { "match": "/^transition:/u", "sort": "alphabetical" }, // `transition:` directive.
        { "match": "/^in:/u", "sort": "alphabetical" },         // `in:` directive.
        { "match": "/^out:/u", "sort": "alphabetical" },        // `out:` directive.
        { "match": "/^animate:/u", "sort": "alphabetical" },    // `animate:` directive.
        { "match": "/^--/u", "sort": "alphabetical" },          // `--style-props` (Alphabetical order within the same group.)
        ["style", "/^style:/u"],                                // `style` attribute, and `style:` directives.
        { "match": "/^let:/u", "sort": "alphabetical" },        // `let:` directives. (Alphabetical order within the same group.)
        "class",
        { "match": "/^class:/u", "sort": "alphabetical" },      // `class:` directives. (Alphabetical order within the same group.)
        { "match": "/^use:/u", "sort": "alphabetical" },        // `use:` directives. (Alphabetical order within the same group.)
      ]
    }],
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
    // Import plugin specific rules
		"import/no-unresolved": "off",
    "import/no-anonymous-default-export": "off",
    "import/newline-after-import": ["error", { count: 1 }],
    // Import sorting
    "import/order": [ "error", {
      "newlines-between": "always",
      groups: [
        "builtin",
        "external",
        "internal",
        ["parent", "sibling"],
        "index",
      ],
      pathGroups: [
        {
          pattern: "$app/**/*",
          group: "external",
          position: "before",
        },
        {
          pattern: "$lib/assets/**/*",
          group: "internal",
          position: "after",
        },
        {
          pattern: "$lib/components/**/*",
          group: "internal",
          position: "after",
        },
        {
          pattern: "$lib/**/*",
          group: "internal",
          position: "after",
        },
        {
          pattern: "{svelte,*.svelte}",
          group: "internal",
          position: "after"
        }
      ],
      alphabetize: { 
        order: "asc",
        caseInsensitive: true
      },
    }]
    // "simple-import-sort/imports": [
    //   "error",
    //   {
    //     groups: [
    //       ["^\\u0000"],
    //       ["^@?\\w"],
    //       ["^config"],
    //       ["^[^.]"],
    //       ["^assets"],
    //       ["^packages"],
    //       ["^utils"],
    //       [
    //         "^types|^store|^services|^constants|^hooks|^theme|^connectors|^queries",
    //       ],
    //       ["^pages"],
    //       ["^components"],
    //       ["^\\."],
    //     ],
    //   },
    // ],
    // "simple-import-sort/exports": "warn",
  },
};
