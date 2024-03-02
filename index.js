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
    "prettier",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  plugins: ["svelte", "import", "prettier", "@typescript-eslint"],
  env: {
    browser: true,
    es2017: true,
    node: true,
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
      "warn",
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
    // Prettier rules
    "prettier/prettier": [
      "error",
      {
        usePrettierrc: false,
        parser: "typescript",
        fileInfoOptions: {
          withNodeModules: true,
          ignorePath: ".prettierignore",
        },
        plugins: [
          "prettier-plugin-packagejson",
          "prettier-plugin-svelte",
          "prettier-plugin-tailwindcss",
        ],
        useTabs: false,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: "all",
        printWidth: 90,
        arrowParens: "always",
        bracketSpacing: true,
        endOfLine: "lf",
        bracketSameLine: false,
        semi: true,
        quoteProps: "as-needed",
        embeddedLanguageFormatting: "auto",
        htmlWhitespaceSensitivity: "ignore",
        // Svelte related configuration
        svelteIndentScriptAndStyle: true,
        svelteSortOrder: "options-scripts-markup-styles",
        svelteStrictMode: true,
        svelteAllowShorthand: true,
        overrides: [
          {
            files: "*.svelte",
            options: {
              parser: "html",
            },
          },
          {
            files: "*.html",
            options: {
              parser: "html",
            },
          },
          {
            files: "*.json",
            options: {
              parser: "json",
            },
          },
        ],
        // Tailwind CSS configuration
        tailwindConfig: "tailwind.config.ts", // specify tailwind css configuration file, might need to override in project config
      },
    ],
    // Import sorting
    "import/first": "error", // enforce imports to be declared first
    "import/newline-after-import": ["error", { count: 1 }], // enforce a newline after import statements
    "import/no-absolute-path": "error", // disallow the use of absolute paths in import
    "import/no-duplicates": "error", // disallow duplicate imports
    "import/no-extraneous-dependencies": [
      "error",
      {
        // disallow extraneous dependencies
        devDependencies: true,
        peerDependencies: true,
        optionalDependencies: false,
      },
    ],
    "import/newline-after-import": ["error", { count: 1 }],
    "import/alphabetize": [
      "error",
      {
        order: "asc",
        caseInsensitive: true,
      },
    ],
    "import/order": [
      "error",
      {
        // "newlines-between": "always",
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        pathGroups: [
          {
            pattern: "$app/**/*",
            group: "external",
            position: "before",
          },
          {
            pattern: "^[$|@](lib/)?types(/(.*).(types|d).ts)?$",
            group: "external",
            position: "after",
          },
          {
            pattern: "[$|@](lib/)?(config|queries|services|utils)(/(.*))?$",
            group: "internal",
            position: "before",
          },
          {
            pattern: "[$|@](lib/)?stores(/(.*))?$",
            group: "internal",
            position: "after",
          },
          {
            pattern: "[$|@](lib/)?assets(/(.*))?$",
            group: "parent",
            position: "before",
          },
          {
            pattern: "[$|@](lib/)?styles(/(.*))?$",
            group: "parent",
            position: "before",
          },
          {
            pattern: "^[$|@](lib/)?comp(onents)?(/(.*))?$",
            group: "parent",
            position: "before",
          },
          {
            pattern: "{svelte,*.svelte}",
            group: "parent",
            position: "before",
          },
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
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
            singleline: 3,
          },
        ],
        "svelte/mustache-spacing": [
          "error",
          {
            textExpressions: "never", // or "always"
            attributesAndProps: "never", // or "always"
            directiveExpressions: "never", // or "always"
            tags: {
              openingBrace: "never", // or "always"
              closingBrace: "never", // or "always" or "always-after-expression"
            },
          },
        ],
        "svelte/require-each-key": "error",
        "svelte/valid-each-key": "error",
        "svelte/html-self-closing": ["error", "all"],
        "svelte/html-closing-bracket-spacing": [
          "error",
          {
            startTag: "never", // or "always" or "ignore"
            endTag: "never", // or "always" or "ignore"
            selfClosingTag: "always", // or "never" or "ignore"
          },
        ],
        "svelte/first-attribute-linebreak": [
          "error",
          {
            multiline: "below",
            singleline: "beside",
          },
        ],
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
