module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    extraFileExtensions: [".svelte",".json",".html"],
    sourceType: "module"
  },
  extends: [
    'eslint:recommended',
    "plugin:svelte/recommended",
    "plugin:@typescript-eslint/recommended",
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  plugins: [
    "html",
    "svelte",
    "import",
    "prettier",
    "@typescript-eslint",
  ],
  ignorePatterns: [".cjs"],
  settings: {
    "html/html-extensions": [".html", ".svelte"],
    svelte: {
      ignoreWarnings: [
        '@typescript-eslint/no-unsafe-assignment',
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
		node: true
	},
  overrides: [
    {
      files: ["*.svelte"],
			parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: "@typescript-eslint/parser"
      }
    },
  ],
  rules: {
    // Base eslint rules
    "curly": [ "error", "multi-line" ],                 // enforce brace style
    "eqeqeq": ["error", "always", {                     // require use of === and !==
      "null": "ignore"
    }],
    "logical-assignment-operators": ["warn"],           // disallow logical assignment operators in conditional expression
    "no-compare-neg-zero": "error",                     // disallow comparing against negative zero
    "no-console": ["error", { allow: ["warn", "error", "info"] }], // disallow console
    "no-const-assign": "error",                         // disallow reassigning const variables
    "no-constant-condition": "error",                   // disallow constant expressions in conditions
    "no-debugger": "error",                             // disallow debugger
    "no-dupe-else-if": "error",                         // disallow duplicate else if blocks
    "no-dupe-keys": "error",                            // disallow duplicate keys in object literals
    "no-duplicate-case": "error",                       // disallow duplicate case labels in a switch statement
    // "no-duplicate-imports": "error",                 // disallow duplicate imports (not applicable for svelte)
    "no-else-return": "error",                          // disallow else after a return in an if statement
    "no-empty-pattern": "error",                        // disallow empty destructuring patterns
    "no-process-exit": "error",                         // disallow process.exit()
    // "no-unused-vars": ["error", { args: "none" }],       // disallow unused variables (enabled in typescript-eslint)
    "arrow-body-style": ["error", "as-needed"],         // enforce consistent arrow function body style
    "no-console": ["error", { allow: ["warn", "error", "info"] }],  // disallow console
    "no-continue": "error",                             // disallow continue statements
    "no-empty": "warn",                                 // disallow empty block statements
    "no-empty-function": "warn",                        // disallow empty functions
    "no-empty-static-block": "warn",                    // disallow empty static block
    "one-var": ["error", "never"],                      // enforce variables to be declared either together or separately in functions
    "prefer-arrow-callback": "error",                   // require arrow callbacks
    "prefer-const": "error",                            // require const over let
    "prefer-destructuring": "error",                    // require destructuring
    "prefer-exponentiation-operator": "warn",           // prefer exponentiation operator
    "prefer-object-spread": "error",                    // require object spread
    "prefer-spread": "error",                           // require spread operator
    "require-await": "error",                           // require await in async function
    "sort-vars": "error",                               // enforce sorted variable declarations
    "yoda": "error",                                    // disallow yoda conditions
    "object-curly-spacing": ["error", "always"],        // enforce consistent spacing inside braces
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],

    // Prettier
    "prettier/prettier": [ "error", {
      "usePrettierrc": false,                           // whether to use prettier configuration file
      "parser": "typescript",                        // specify parser
      "fileInfoOptions": {                              // specify fileInfo options
        "withNodeModules": true,
        "ignorePath": ".prettierignore",
      },
      "plugins": [
        "prettier-plugin-packagejson",
        "prettier-plugin-svelte",
        "prettier-plugin-tailwindcss",
      ],
      "useTabs": false,                                 // indent with tabs
      "tabWidth": 2,                                    // specify indentation spaces
      "singleQuote": true,                              // use single quotes
      "trailingComma": "all",                           // always use trailing comma
      "printWidth": 80,                                 // specify the line length printer will wrap on
      "arrowParens": "always",                          // always use parentheses in arrow functions
      "bracketSpacing": true,                           // use bracket spacing
      "endOfLine": "lf",
      "bracketSameLine": false,                         // always end multiline html elements with bracket on new line
      // "proseWrap": "always",                            // always wrap prose
      "semi": true,                                     // always use semicolons
      "quoteProps": "as-needed",                        // quote object properties as needed
      "embeddedLanguageFormatting": "auto",
      "htmlWhitespaceSensitivity": "ignore",            // enforce strict whitespace sensitivity
      // "singleAttributePerLine:": true,                  // enforce single attribute per line
      // Svelte related configuration
      "svelteIndentScriptAndStyle": true,               // indent script and style
      "svelteSortOrder": "options-scripts-markup-styles",// sort order
      "svelteStrictMode": false,                        // do not enforce strict mode
      "svelteAllowShorthand": true,                     // allow shorthand
      "svelteBracketNewLine": true,                     // always end multiline html elements with bracket on new line
      "overrides": [
        {
          "files": "*.svelte",
          "options": {
            "parser": "html"
          },
        },
        {
          "files": "*.html",
          "options": {
            "parser": "html"
          },
        },
      ],
      // Tailwind CSS configuration
      "tailwindConfig": "tailwind.config.js",           // specify tailwind css configuration file, might need to override in project config
    }],

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
    // "svelte/prefer-destructured-store-props": ["warn"], // use destructure props syntax with store bindings
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
    // "svelte/indent": ["error", {                        // svelte indentation (handled by prettier)
    //   "indent": 2,
    //   "ignoredNodes": [],
    //   "switchCase": 1,
    //   "alignAttributesVertically": true,
    // }],
    "svelte/max-attributes-per-line": ["error", {       // limit attributes per line
      "multiline": 1,
      "singleline": 3
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
    '@typescript-eslint/ban-ts-comment': ["error", {            // enforce consistent ts-comment style
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': true,
      'ts-nocheck': true,
      'ts-check': false,
      minimumDescriptionLength: 5,
    }],
    '@typescript-eslint/consistent-type-imports': ["error", {    // require types to be imported from their source
      prefer: 'type-imports', 
      disallowTypeAnnotations: true 
    }],
    "@typescript-eslint/no-explicit-any": "error",              // disallow the use of `any`
    "@typescript-eslint/no-non-null-assertion": ["warn"],       // disallow non-null-assertions
    "@typescript-eslint/no-empty-interface": [ "error", {       // disallow empty interfaces
      allowSingleExtends: false, 
    }],
    "@typescript-eslint/array-type": ["warn"],                  // enforce the array type in array
    // '@typescript-eslint/no-unnecessary-condition': ["error", {  // disallow unnecessary conditions (not applicable for svelte - needs parser fix)
    //   allowConstantLoopConditions: true 
    // }],
    "@typescript-eslint/no-unused-vars": [ "error", {           // disallow unused variables
      vars: "all",              // check all variables
      args: "after-used",       // check function arguments
      ignoreRestSiblings: true, // ignore rest siblings
      argsIgnorePattern: "^_",  // ignore args that start with underscore
      varsIgnorePattern: "^_",  // ignore vars that start with underscore
      // varsIgnorePattern: '^\\$\\$(Props|Events|Slots)$',
    },],
    '@typescript-eslint/restrict-template-expressions': ["error", {// enforce template literal expressions
      allowNumber: true,
      allowBoolean: true,
      allowAny: true,
      allowNullish: true,
      allowRegExp: true,
    }],
    '@typescript-eslint/prefer-nullish-coalescing': ["error", { // enforce nullish-coalescing
      ignoreConditionalTests: true,
      ignorePrimitives: true,
    }],
    
    // Import sorting
    "import/first": "error",                                  // enforce imports to be declared first
    "import/newline-after-import": ["error", { count: 1 }],   // enforce a newline after import statements
    "import/no-absolute-path": "error",                       // disallow the use of absolute paths in import
    "import/no-default-export": "error",                      // disallow default exports
    "import/no-duplicates": "error",                          // disallow duplicate imports
    "import/no-extraneous-dependencies": ["error", {          // disallow extraneous dependencies
      devDependencies: true,
      peerDependencies: true,
      optionalDependencies: false,
    }],
    "import/no-named-default": "error",                       // disallow named default exports
    "import/no-named-export": "off",                          // everything has to be a named export
    "import/no-self-import": "error",                         // disallow module to import itself
		"import/no-unresolved": "off",                            // disallow unresolved imports
    "import/newline-after-import": ["error", { count: 1 }],
    "import/order": [ "error", {
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
          pattern: "^[$|@](lib\/)?types(\/(.*).(types|d).ts)?$",
          group: "external",
          position: "after",
        },
        {
          pattern: "[$|@](lib\/)?(config|queries|services|utils)(\/(.*))?$",
          group: "internal",
          position: "before",
        },
        {
          pattern: "[$|@](lib\/)?stores(\/(.*))?$",
          group: "internal",
          position: "after",
        },
        {
          pattern: "[$|@](lib\/)?assets(\/(.*))?$",
          group: "parent",
          position: "before",
        },
        {
          pattern: "[$|@](lib\/)?styles(\/(.*))?$",
          group: "parent",
          position: "before",
        },
        {
          pattern: "^[$|@](lib\/)?comp(onents)?(\/(.*))?$",
          group: "parent",
          position: "before",
        },
        {
          pattern: "{svelte,*.svelte}",
          group: "parent",
          position: "before"
        }
      ],
      alphabetize: { 
        order: "asc",
        caseInsensitive: true
      },
    }]
  },
};
