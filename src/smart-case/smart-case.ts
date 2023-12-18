import { customRules, customRulesSet } from "./smart-case.types";

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
  inputString: string,
  customRules?: customRules
): string => {
  const transformWord = (
    word: string,
    _: number,
    rulesAsSets?: customRulesSet
  ): string => {
    const newWord = rulesAsSets
      ? applyCustomRules(word, rulesAsSets)
      : undefined;
    return newWord ?? word[0].toUpperCase() + word.slice(1).toLowerCase();
  };

  return applyRulesAndJoin(inputString, transformWord, " ", customRules);
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
  inputString: string,
  customRules?: customRules
): string => {
  if (!inputString) return ""; // Handle empty string

  const transformWord = (
    word: string,
    index: number,
    rulesAsSets?: customRulesSet
  ): string => {
    if (index === 0) {
      const newWord = rulesAsSets
        ? applyCustomRules(word.toLowerCase(), rulesAsSets)
        : undefined;
      return (
        (newWord ?? word).charAt(0).toUpperCase() +
        (newWord ?? word).slice(1).toLowerCase()
      );
    } else {
      const newWord = rulesAsSets
        ? applyCustomRules(word.toLowerCase(), rulesAsSets)
        : word.toLowerCase();
      return newWord ?? word;
    }
  };

  return applyRulesAndJoin(inputString, transformWord, " ", customRules);
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
  inputString: string,
  customRules?: customRules
): string => {
  const transformWord = (
    word: string,
    index: number,
    rulesAsSets?: customRulesSet
  ): string => {
    const newWord = rulesAsSets
      ? applyCustomRules(word, rulesAsSets)
      : undefined;
    return index === 0
      ? word.toLowerCase()
      : newWord ?? word[0].toUpperCase() + word.slice(1).toLowerCase();
  };

  return applyRulesAndJoin(inputString, transformWord, "", customRules);
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
  inputString: string,
  customRules?: customRules
): string => {
  const transformWord = (
    word: string,
    _: number,
    rulesAsSets?: customRulesSet
  ): string => {
    const newWord = rulesAsSets
      ? applyCustomRules(word, rulesAsSets)
      : undefined;
    return newWord ?? word[0].toUpperCase() + word.slice(1).toLowerCase();
  };

  return applyRulesAndJoin(inputString, transformWord, "", customRules);
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
  inputString: string,
  customRules?: customRules
): string => {
  const transformWord = (
    word: string,
    _: number,
    rulesAsSets?: customRulesSet
  ): string => {
    const newWord = rulesAsSets
      ? applyCustomRules(word, rulesAsSets)
      : undefined;
    return newWord ?? word.toLowerCase();
  };

  return applyRulesAndJoin(inputString, transformWord, "_", customRules);
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
  inputString: string,
  customRules?: customRules
): string => {
  const transformWord = (
    word: string,
    _: number,
    rulesAsSets?: customRulesSet
  ): string => {
    const newWord = rulesAsSets
      ? applyCustomRules(word, rulesAsSets)
      : undefined;
    return newWord ?? word.toLowerCase();
  };

  return applyRulesAndJoin(inputString, transformWord, "-", customRules);
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
  inputString: string,
  customRules?: customRules
): string => {
  const transformWord = (
    word: string,
    _: number,
    rulesAsSets?: customRulesSet
  ): string => {
    const newWord = rulesAsSets
      ? applyCustomRules(word, rulesAsSets)
      : undefined;
    return newWord ?? word.toUpperCase();
  };

  return applyRulesAndJoin(inputString, transformWord, "_", customRules);
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
  inputString: string,
  customRules?: customRules
): string => {
  const transformWord = (
    word: string,
    _: number,
    rulesAsSets?: customRulesSet
  ): string => {
    const newWord = rulesAsSets
      ? applyCustomRules(word, rulesAsSets)
      : undefined;
    return newWord ?? word.toLowerCase();
  };

  return applyRulesAndJoin(inputString, transformWord, ".", customRules);
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
  inputString: string,
  customRules?: customRules
): string => {
  const transformWord = (
    word: string,
    _: number,
    rulesAsSets?: customRulesSet
  ): string => {
    const newWord = rulesAsSets
      ? applyCustomRules(word, rulesAsSets)
      : undefined;
    return newWord ?? word.toLowerCase();
  };

  return applyRulesAndJoin(inputString, transformWord, "/", customRules);
};

const applyCustomRules = (
  word: string,
  customRules: customRulesSet
): string | undefined => {
  const {
    wordsToAlwaysCapitalize,
    wordsToAlwaysLowerCase,
    wordsToAlwaysUpperCase,
    wordsToNeverTransform,
  } = customRules;

  if (wordsToAlwaysCapitalize?.has(word))
    return `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;
  if (wordsToAlwaysLowerCase?.has(word)) return word.toLowerCase();
  if (wordsToAlwaysUpperCase?.has(word)) return word.toUpperCase();
  if (wordsToNeverTransform?.has(word)) return word;

  return undefined;
};

const convertRulesToSets = (
  customRulesAsArray: customRules
): customRulesSet => {
  const rulesWithSets: customRulesSet = {};
  Object.keys(customRulesAsArray).forEach((key) => {
    rulesWithSets[key as keyof customRules] = new Set(
      customRulesAsArray[key as keyof customRules]
    );
  });
  return rulesWithSets;
};

const applyRulesAndJoin = (
  inputString: string,
  transform: (
    word: string,
    index: number,
    rulesAsSets?: customRulesSet
  ) => string,
  delimiter: string,
  customRules?: customRules
): string => {
  const rulesAsSets = customRules ? convertRulesToSets(customRules) : undefined;

  return inputString
    .split(" ")
    .map((word, index) => transform(word, index, rulesAsSets))
    .join(delimiter);
};
