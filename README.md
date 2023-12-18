# SmartCase - Intelligent String Casing Library

[![npm version](https://badge.fury.io/js/smart-case.svg)](https://badge.fury.io/js/smart-case)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

SmartCase is a JavaScript library that provides intelligent string casing and capitalization functions, offering a range of formatting options to simplify string manipulation tasks in your applications.

## Features

- **Title Case:** Convert strings to title case.
- **Sentence Case:** Convert strings to sentence case.
- **Camel Case:** Convert strings to camel case.
- **Pascal Case:** Convert strings to pascal case.
- **Snake Case:** Convert strings to snake case.
- **Kebab Case:** Convert strings to kebab case.
- **Constant Case:** Convert strings to constant case.
- **Dot Case:** Convert strings to dot case.
- **Path Case:** Convert strings to path case.

### Custom rules for each case

## Installation

```bash
npm install smart-case
```

## Usage

```javascript
const { titleCase, camelCase, smartCase } = require("smart-case");
// const { titleCase, camelCase, smartCase } from "smart-case" ;

// Convert a string to title case
console.log(titleCase("hello world")); // Output: "Hello World"

// Convert a string to camel case
console.log(camelCase("hello world")); // Output: "helloWorld"

// Convert a string to constant case
console.log(constantCase("hello world")); // Output: "HELLO_WORLD"

// Using custom rules for title case
const customTitleCaseRules = {
  wordsToAlwaysUpperCase: ["world"],
};
console.log(titleCase("hello world", customTitleCaseRules)); // Output: "Hello WORLD"

// Using custom rules for constant case
const customConstantCaseRules = {
  wordsToAlwaysLowerCase: ["world"],
};
console.log(constantCase("hello world", customConstantCaseRules)); // Output: "HELLO_world"
```

# License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Acknowledgments

- This library is inspired by the need for consistent and intelligent string casing in JavaScript applications.

# Author

- [Nan0ck](https://github.com/Nan0ck)
