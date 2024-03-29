/** @type { import("eslint").Linter.Config } */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    extraFileExtensions: [".svelte"],
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:svelte/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  plugins: ["svelte", "import", "simple-import-sort", "@typescript-eslint"],
  env: {
    browser: true,
    es2017: true,
  },
  settings: {
    "import/resolver": "node",
  },
  rules: {
    "no-console": ["warn", { allow: ["warn", "error", "info"] }],
    "no-trailing-spaces": [
      "error",
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],
    indent: ["error", 2],
    "arrow-body-style": ["error", "as-needed"],
    yoda: "error",
    "no-const-assign": "error",
    "prefer-const": "error",
    "no-var": "error",
    "prefer-arrow-callback": "error",
    "prefer-spread": "error",
    "sort-vars": [
      "error",
      {
        ignoreCase: false,
      },
    ],
    // Typescript rules
    "@typescript-eslint/no-shadow": 2, // disallow declaration of variables already declared in the outer scope
    "no-shadow": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        allowSingleExtends: false,
      },
    ],
    "@typescript-eslint/array-type": [
      "warn",
      {
        default: "generic",
        readonly: "generic",
      },
    ],
    "@typescript-eslint/no-non-null-assertion": ["warn"],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        allowSingleExtends: false,
      },
    ],
    "@typescript-eslint/no-var-requires": "off",
    // Import sorting rules
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": ["error", { count: 1 }],
    "import/no-duplicates": "error",
    "import/no-anonymous-default-export": "off",
    "import/no-unresolved": "off",
    "simple-import-sort/imports": [
      "warn",
      {
        groups: [
          ["^\\u0000"],
          ["^@?\\w"],
          ["^[$|@]?(src\/)?(lib\/)?config"],
          ["^[$|@]?(src\/)?(lib\/)?assets"],
          ["^[$|@|.]?(src\/)?((lib)?\/)?[$]?(types)?"],
          ["^[$|@]?(src\/)?(lib\/)?utils"],
          [
            "^[$|@]?(src\/)?(lib\/)?(store|stores|services|constants|hooks|queries|data|paraglide|i18n)",
          ],
          ["^[$|@]?(src\/)?(lib\/)?components"],
          ["^[^.]"],
          ["^\\."],
        ],
      },
    ],
  },
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
      rules: {
        indent: "off",
        "no-trailing-spaces": "off",
        "svelte/indent": [
          "error",
          {
            indent: 2,
            ignoredNodes: [],
            switchCase: 1,
            alignAttributesVertically: false,
          },
        ],
        "svelte/block-lang": [
          "error",
          {
            enforceScriptPresent: true,
            enforceStylePresent: false,
            script: ["ts"],
            style: [null, "postcss"],
          },
        ],
        "svelte/spaced-html-comment": ["error", "always"],
        "svelte/no-spaces-around-equal-signs-in-attribute": "error",
        "svelte/no-extra-reactive-curlies": "error",
        "svelte/max-attributes-per-line": [
          "error",
          {
            multiline: 1,
            singleline: 4,
          },
        ],
        "svelte/mustache-spacing": [
          "error",
          {
            textExpressions: "never",
            attributesAndProps: "never",
            directiveExpressions: "never",
            tags: {
              openingBrace: "never",
              closingBrace: "never",
            },
          },
        ],
        "svelte/require-each-key": "error",
        "svelte/valid-each-key": "error",
        "svelte/html-self-closing": ["error", "all"],
        "svelte/html-closing-bracket-spacing": [
          "error",
          {
            startTag: "never",
            endTag: "never",
            selfClosingTag: "always",
          },
        ],
        "svelte/first-attribute-linebreak": "off",
        "svelte/html-quotes": [
          "error",
          {
            prefer: "double",
            dynamic: {
              quoted: false,
              avoidInvalidUnquotedInHTML: false,
            },
          },
        ],
        "svelte/no-useless-mustaches": "error",
        "svelte/no-ignored-unsubscribe": "error",
        "svelte/no-reactive-literals": "error",
        "svelte/no-at-debug-tags": "warn",
        "svelte/no-trailing-spaces": [
          "error",
          {
            skipBlankLines: false,
            ignoreComments: false,
          },
        ],
        "svelte/button-has-type": [
          "error",
          {
            button: true,
            submit: true,
            reset: true,
          },
        ],
        "svelte/sort-attributes": [
          "error",
          {
            order: [
              "slot",
              "this",
              "bind:this",
              "id",
              "name",
              "key",
              "type",
              "ref",
              {
                // other attributes. (Alphabetical order within the same group.)
                match: [
                  "!/:/u",
                  "!/^(?:this|id|name|style|class)$/u",
                  "!/^--/u",
                ],
                sort: "alphabetical",
              },
              ["/^bind:/u", "!bind:this", "/^on:/u"], // `bind:` directives (other then `bind:this`), and `on:` directives.
              { match: "/^transition:/u", sort: "alphabetical" }, // `transition:` directive.
              { match: "/^in:/u", sort: "alphabetical" }, // `in:` directive.
              { match: "/^out:/u", sort: "alphabetical" }, // `out:` directive.
              { match: "/^animate:/u", sort: "alphabetical" }, // `animate:` directive.
              { match: "/^--/u", sort: "alphabetical" }, // `--style-props` (Alphabetical order within the same group.)
              ["style", "/^style:/u"], // `style` attribute, and `style:` directives.
              { match: "/^let:/u", sort: "alphabetical" }, // `let:` directives. (Alphabetical order within the same group.)
              "class",
              { match: "/^class:/u", sort: "alphabetical" }, // `class:` directives. (Alphabetical order within the same group.)
              { match: "/^use:/u", sort: "alphabetical" }, // `use:` directives. (Alphabetical order within the same group.)
            ],
          },
        ],
      },
    },
  ],
};
