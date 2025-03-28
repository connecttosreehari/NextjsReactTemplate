# Introduction

Welcome to your new project! This repository is set up using a variety of packages to enhance development efficiency and functionality. Below is an overview of the key dependencies, devDependencies, and scripts used in this project.

## Dependencies

- @chakra-ui/cli & @chakra-ui/react: Provides accessible, reusable, and composable React components.
- @emotion/react: For writing CSS styles with JavaScript.
- @tanstack/react-query & @tanstack/react-table: For fetching, caching, and managing server state, and for creating data grids.
- axios: A promise-based HTTP client for making API requests.
- date-fns: A modern JavaScript date utility library.
- lodash: A utility library for common programming tasks.
- next & next-themes: Next.js framework for server-side rendering and static site generation, and theme management.
- react & react-dom: Core libraries for building user interfaces.
- react-hook-form: For managing form state and validation.
- snippet: For managing code snippets.
- victory: For creating data visualizations.

## DevDependencies

- @eslint/eslintrc: For configuring ESLint.
- @ianvs/prettier-plugin-sort-imports: A Prettier plugin to sort imports.
- @types/lodash, @types/node, @types/react, @types/react-dom: TypeScript type definitions for Lodash, Node.js, React, and React DOM.
- @typescript-eslint/eslint-plugin & @typescript-eslint/parser: Integrates ESLint with TypeScript.
- eslint: A tool for identifying and fixing problems in JavaScript code.
- eslint-config-next: ESLint configuration for Next.js.
- eslint-config-prettier: Disables ESLint rules that conflict with Prettier.
- eslint-plugin-prettier: Runs Prettier as an ESLint rule.
- eslint-plugin-unused-imports: ESLint plugin to remove unused imports.
- husky: For managing Git hooks.
- lint-staged: Runs linters on staged Git files.
- prettier: An opinionated code formatter.
- prettier-plugin-sort-json: A Prettier plugin to sort JSON files.
- typescript: A typed superset of JavaScript that compiles to plain JavaScript.

### How Husky, ESLint, Prettier Work Together

**Prettier** is an opinionated code formatter that automatically formats your code according to a set of rules. It ensures that your code looks consistent across your project.

**ESLint** is a tool for identifying and fixing problems in your JavaScript code. It helps enforce coding standards and catch errors early by analyzing your code for potential issues.

**Husky** allows you to run scripts at various points in your Git workflow. For example, you can use Husky to run Prettier and ESLint before each commit to ensure that your code is properly formatted and free of linting errors.

**Working: Husky sets up a pre-commit hook that runs before each commit.
The pre-commit hook uses ESLint to check for code issues and Prettier to format the code. If ESLint or Prettier finds any issues, the commit is blocked until the issues are resolved.**

## Getting Started

### Clone the Repository

```bash
git clone <repository-url>
```

### Move and Rename Folder

Move the next-app-template folder out.
Rename the folder according to your project.

### Initialize Git

Navigate to the renamed folder Run git init to transform the current directory into a Git repository.

```bash
cd <your-project-folder>
git init
```

### Install Dependencies

We are using the Yarn package manager. Execute the following command to download all the dependencies:

```bash
yarn 
```

## Scripts

```javascript
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "lint:strict": "next lint '*/**/*.{js,jsx,ts,tsx}'",
    "prettier": "prettier --write */**/*.{js,jsx,json,ts,tsx,scss,css,md}"
  }
```

### yarn dev: Runs the Next.js development server

```bash
next dev
```

### yarn build: Builds the Next.js application for production

```bash
next build
```

### yarn start: Starts the Next.js application in production mode

```bash
next start
```

### yarn lint: Runs ESLint to check for code issues

```bash
next lint
```

### yarn lint:fix: Runs ESLint and automatically fixes linting errors

```bash
next lint --fix
```

### yarn lint:strict: Runs ESLint on all JavaScript and TypeScript files in the project

```bash
next lint '*/**/*.{js,jsx,ts,tsx}'
```

### yarn prettier: Formats all JavaScript, TypeScript, JSON, SCSS, CSS, and Markdown files using Prettier

```bash
prettier --write */**/*.{js,jsx,json,ts,tsx,scss,css,md}
```

## Summary

This setup leverages powerful libraries, tools, and scripts to create a robust, efficient, and scalable React application. Each package and script plays a specific role in enhancing the functionality, performance, and development experience of the project.
