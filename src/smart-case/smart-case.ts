import { inputString, outputString, customRules } from "./smart-case.types";

const applyCustomRules = (
  word: inputString, // single word
  customRules: customRules
): outputString | undefined => {
  const {
    wordsToAlwaysCapitalize,
    wordsToAlwaysLowerCase,
    wordsToAlwaysUpperCase,
    wordsToNeverCapitalize,
    wordsToNeverLowerCase,
    wordsToNeverUpperCase,
  } = customRules;
  if (wordsToAlwaysCapitalize?.includes(word)) return word[0].toUpperCase() + word.slice(1).toLowerCase();
  if (wordsToAlwaysLowerCase?.includes(word)) return word.toLowerCase();
  if (wordsToAlwaysUpperCase?.includes(word)) return word.toUpperCase();
  if (wordsToNeverCapitalize?.includes(word)) return word.toLowerCase();
  if (wordsToNeverLowerCase?.includes(word)) return word.toUpperCase();
  if (wordsToNeverUpperCase?.includes(word)) return word.toLowerCase();
  return undefined;
};

/**
 * Converts a string to title case.
 * @param inputString - The string to convert.
 * @returns The title case string.
 * @example
 * titleCase("hello world"); // "Hello World"
 * titleCase("HELLO WORLD"); // "Hello World"
 * titleCase("hello world", { wordsToAlwaysUpperCase:  ["world"] }); // "Hello WORLD"
 */
export const titleCase = (
  inputString: inputString,
  customRules?: customRules
): outputString => {
  const outputString = inputString
    .split(" ")
    .map((word) => {
      if (customRules) {
        const newWord = applyCustomRules(word, customRules);
        if (newWord) return newWord;
      }
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
  return outputString;
};

/**
 * Converts a string to sentence case.
 * @param inputString - The string to convert.
 * @returns The sentence case string.
 * @example
 * sentenceCase("hello world"); // "Hello world"
 * sentenceCase("HELLO WORLD"); // "Hello world"
 * sentenceCase("hello world", { wordsToAlwaysUpperCase:  ["world"] }); // "Hello WORLD"
 * sentenceCase("hello world", { wordsToAlwaysLowerCase:  ["hello"] }); // "hello world"
 */
export const sentenceCase = (
  inputString: inputString,
  customRules?: customRules
): outputString => {
  let outputString = inputString[0].toUpperCase() + inputString.slice(1);
  if (!customRules) return outputString;
  outputString = outputString
    .split(" ")
    .map((word) => {
      const newWord = applyCustomRules(word, customRules);
      if (newWord) return newWord;
      return word;
    })
    .join(" ");
  return outputString;
};

/**
 * Converts a string to camel case.
 * @param inputString - The string to convert.
 * @returns The camel case string.
 * @example
 * camelCase("hello world"); // "helloWorld"
 * camelCase("HELLO WORLD"); // "helloWorld"
 * camelCase("hello world", { wordsToAlwaysUpperCase:  ["world"] }); // "helloWORLD"
 */
export const camelCase = (
  inputString: inputString,
  customRules?: customRules
): outputString => {
  const outputString = inputString
    .split(" ")
    .map((word, index) => {
      if (customRules) {
        const newWord = applyCustomRules(word, customRules);
        if (newWord) return newWord;
      }
      return index === 0
        ? word.toLowerCase()
        : word[0].toUpperCase() + word.slice(1);
    })
    .join("");
  return outputString;
};

/**
 * Converts a string to pascal case.
 * @param inputString - The string to convert.
 * @returns The pascal case string.
 * @example
 * pascalCase("hello world"); // "HelloWorld"
 * pascalCase("HELLO WORLD"); // "HelloWorld"
 * pascalCase("hello world", { wordsToAlwaysUpperCase:  ["world"] }); // "HelloWORLD"
 */
export const pascalCase = (
  inputString: inputString,
  customRules?: customRules
): outputString => {
  const outputString = inputString
    .split(" ")
    .map((word) => {
      if (customRules) {
        const newWord = applyCustomRules(word, customRules);
        if (newWord) return newWord;
      }
      return word[0].toUpperCase() + word.slice(1);
    })
    .join("");
  return outputString;
};

/**
 * Converts a string to snake case.
 * @param inputString - The string to convert.
 * @returns The snake case string.
 * @example
 * snakeCase("hello world"); // "hello_world"
 * snakeCase("HELLO WORLD"); // "hello_world"
 * snakeCase("hello world", { wordsToAlwaysUpperCase:  ["world"] }); // "hello_WORLD"
 */
export const snakeCase = (
  inputString: inputString,
  customRules?: customRules
): outputString => {
  const outputString = inputString
    .split(" ")
    .map((word) => {
      if (customRules) {
        const newWord = applyCustomRules(word, customRules);
        if (newWord) return newWord;
      }
      return word.toLowerCase();
    })
    .join("_");
  return outputString;
};

/**
 * Converts a string to kebab case.
 * @param inputString - The string to convert.
 * @returns The kebab case string.
 * @example
 * kebabCase("hello world"); // "hello-world"
 * kebabCase("HELLO WORLD"); // "hello-world"
 * kebabCase("hello world", { wordsToAlwaysUpperCase:  ["world"] }); // "hello-WORLD"
 */
export const kebabCase = (
  inputString: inputString,
  customRules?: customRules
): outputString => {
  const outputString = inputString
    .split(" ")
    .map((word) => {
      if (customRules) {
        const newWord = applyCustomRules(word, customRules);
        if (newWord) return newWord;
      }
      return word.toLowerCase();
    })
    .join("-");
  return outputString;
};

/**
 * Converts a string to constant case.
 * @param inputString - The string to convert.
 * @returns The constant case string.
 * @example
 * constantCase("hello world"); // "HELLO_WORLD"
 * constantCase("HELLO WORLD"); // "HELLO_WORLD"
 * constantCase("hello world", { wordsToAlwaysUpperCase:  ["world"] }); // "HELLO_WORLD"
 */
export const constantCase = (
  inputString: inputString,
  customRules?: customRules
): outputString => {
  const outputString = inputString
    .split(" ")
    .map((word) => {
      if (customRules) {
        const newWord = applyCustomRules(word, customRules);
        if (newWord) return newWord;
      }
      return word.toUpperCase();
    })
    .join("_");
  return outputString;
};

/**
 * Converts a string to dot case.
 * @param inputString - The string to convert.
 * @returns The dot case string.
 * @example
 * dotCase("hello world"); // "hello.world"
 * dotCase("HELLO WORLD"); // "hello.world"
 * dotCase("hello world", { wordsToAlwaysUpperCase:  ["world"] }); // "hello.WORLD"
 */
export const dotCase = (
  inputString: inputString,
  customRules?: customRules
): outputString => {
  const outputString = inputString
    .split(" ")
    .map((word) => {
      if (customRules) {
        const newWord = applyCustomRules(word, customRules);
        if (newWord) return newWord;
      }
      return word.toLowerCase();
    })
    .join(".");
  return outputString;
};

/**
 * Converts a string to path case.
 * @param inputString - The string to convert.
 * @returns The path case string.
 * @example
 * pathCase("hello world"); // "hello/world"
 * pathCase("HELLO WORLD"); // "hello/world"
 * pathCase("hello world", { wordsToAlwaysUpperCase:  ["world"] }); // "hello/WORLD"
 */
export const pathCase = (
  inputString: inputString,
  customRules?: customRules
): outputString => {
  const outputString = inputString
    .split(" ")
    .map((word) => {
      if (customRules) {
        const newWord = applyCustomRules(word, customRules);
        if (newWord) return newWord;
      }
      return word.toLowerCase();
    })
    .join("/");
  return outputString;
};

/**
 * Converts a string to smart case.
 * @param inputString - The string to convert.
 * @returns The smart case string.
 * @example
 * smartCase("hello world"); // "Hello World"
 * smartCase("HELLO WORLD"); // "HELLO WORLD"
 * smartCase("helloWorld"); // "Hello World"
 * smartCase("hello world", { wordsToAlwaysUpperCase:  ["world"] }); // "Hello WORLD"
 *
 */
export const smartCase = (
  inputString: inputString,
  customRules?: customRules
): outputString => {
  const outputString = inputString
    .split(" ")
    .map((word) => {
      if (customRules) {
        const newWord = applyCustomRules(word, customRules);
        if (newWord) return newWord;
      }
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
  return outputString;
};
