# Custom ES-Lint rules for Svelte & SvelteKit

This is a WIP collection of custom ESLint rules for Svelte and SvelteKit projects inspired by common (and sometimes annoying) mistakes we do and probably can be avoided with some code linting.
The main goal is to create a more consistent and predictable development experience, and less time spend on code review.
 
The rules are very strict by default and can be configured with an extra options object to make them less strict, more flexible, or completely disabled. [WIP]

## Installation

```sh
npm i -D @miroir/eslint-config-svelte
```
or
```sh
yarn add -D @miroir/eslint-config-svelte
```

## Usage

Add a `.eslintrc` file to the root of your project with the following content: 
```json
{
  "extends": ["@miroir/eslint-config-svelte"],
  "rules": {
    // add custom rules here
  }
}
```

You may also want to add a `.eslintignore` file to your project to ignore files and folders from linting:
```md
node_modules
public
```

## Contributing

This is a work in progress. Please feel free to open an issue or a pull request with more custom rules to add. 
