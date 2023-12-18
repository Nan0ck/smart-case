/* eslint-disable */
const {
  titleCase,
  sentenceCase,
  camelCase,
  pascalCase,
  snakeCase,
  kebabCase,
  constantCase,
  dotCase,
  pathCase,
} = require("../dist/cjs");

describe("String Case Conversions", () => {
  // Common test strings and custom rules
  const testString = "hello world";
  const singleWord = "hello";
  const mixedCase = "HeLLo WoRLD";
  const specialChars = "hello_world-test";
  const numbersString = "hello 123 world";
  const customRules = {
    wordsToAlwaysUpperCase: ["world"],
    wordsToAlwaysLowerCase: ["hello"],
  };

  // Tests for titleCase
  describe("titleCase", () => {
    test("converts simple string to title case", () => {
      expect(titleCase(testString)).toBe("Hello World");
    });
    test("handles single word", () => {
      expect(titleCase(singleWord)).toBe("Hello");
    });
    test("converts mixed case string", () => {
      expect(titleCase(mixedCase)).toBe("Hello World");
    });
    test("handles special characters", () => {
      expect(titleCase(specialChars)).toBe("Hello_world-test");
    });
    test("handles numbers within string", () => {
      expect(titleCase(numbersString)).toBe("Hello 123 World");
    });
    test("applies custom rules", () => {
      expect(titleCase(testString, customRules)).toBe("hello WORLD");
    });
  });

  describe("sentenceCase", () => {
    test("converts simple string to sentence case", () => {
      expect(sentenceCase("hello world")).toBe("Hello world");
    });

    test("handles single word", () => {
      expect(sentenceCase("hello")).toBe("Hello");
    });

    test("retains existing sentence case", () => {
      expect(sentenceCase("Hello world")).toBe("Hello world");
    });

    test("converts all uppercase string", () => {
      expect(sentenceCase("HELLO WORLD")).toBe("Hello world");
    });

    test("handles string with numbers and special characters", () => {
      expect(sentenceCase("hello world 123!")).toBe("Hello world 123!");
    });

    test("applies custom rules to capitalize specific words", () => {
      const customRules = { wordsToAlwaysCapitalize: ["world"] };
      expect(sentenceCase("hello world", customRules)).toBe("Hello World");
    });
  });

  describe("camelCase", () => {
    test("converts simple string to camel case", () => {
      expect(camelCase("hello world")).toBe("helloWorld");
    });

    test("handles single word", () => {
      expect(camelCase("hello")).toBe("hello");
    });

    test("converts all uppercase string", () => {
      expect(camelCase("HELLO WORLD")).toBe("helloWorld");
    });

    test("handles string with numbers and special characters", () => {
      expect(camelCase("hello world 123!")).toBe("helloWorld123!");
    });

    test("applies custom rules to uppercase specific words", () => {
      const customRules = { wordsToAlwaysUpperCase: ["world"] };
      expect(camelCase("hello world", customRules)).toBe("helloWORLD");
    });
  });

  describe("pascalCase", () => {
    test("converts simple string to pascal case", () => {
      expect(pascalCase("hello world")).toBe("HelloWorld");
    });

    test("handles single word", () => {
      expect(pascalCase("hello")).toBe("Hello");
    });

    test("converts all uppercase string", () => {
      expect(pascalCase("HELLO WORLD")).toBe("HelloWorld");
    });

    test("handles string with numbers and special characters", () => {
      expect(pascalCase("hello world 123!")).toBe("HelloWorld123!");
    });

    test("applies custom rules to uppercase specific words", () => {
      const customRules = { wordsToAlwaysUpperCase: ["world"] };
      expect(pascalCase("hello world", customRules)).toBe("HelloWORLD");
    });
  });

  describe("snakeCase", () => {
    test("converts simple string to snake case", () => {
      expect(snakeCase("hello world")).toBe("hello_world");
    });

    test("handles single word", () => {
      expect(snakeCase("hello")).toBe("hello");
    });

    test("converts all uppercase string", () => {
      expect(snakeCase("HELLO WORLD")).toBe("hello_world");
    });

    test("handles string with numbers and special characters", () => {
      expect(snakeCase("hello world 123!")).toBe("hello_world_123!");
    });

    test("applies custom rules to uppercase specific words", () => {
      const customRules = { wordsToAlwaysUpperCase: ["world"] };
      expect(snakeCase("hello world", customRules)).toBe("hello_WORLD");
    });
  });

  describe("kebabCase", () => {
    test("converts simple string to kebab case", () => {
      expect(kebabCase("hello world")).toBe("hello-world");
    });

    test("handles single word", () => {
      expect(kebabCase("hello")).toBe("hello");
    });

    test("converts all uppercase string", () => {
      expect(kebabCase("HELLO WORLD")).toBe("hello-world");
    });

    test("handles string with numbers and special characters", () => {
      expect(kebabCase("hello world 123!")).toBe("hello-world-123!");
    });

    test("applies custom rules to uppercase specific words", () => {
      const customRules = { wordsToAlwaysUpperCase: ["world"] };
      expect(kebabCase("hello world", customRules)).toBe("hello-WORLD");
    });
  });
  describe("constantCase", () => {
    test("converts simple string to constant case", () => {
      expect(constantCase("hello world")).toBe("HELLO_WORLD");
    });

    test("handles single word", () => {
      expect(constantCase("hello")).toBe("HELLO");
    });

    test("converts all lowercase string", () => {
      expect(constantCase("hello world")).toBe("HELLO_WORLD");
    });

    test("handles string with numbers and special characters", () => {
      expect(constantCase("hello world 123!")).toBe("HELLO_WORLD_123!");
    });

    test("applies custom rules to lowercase specific words", () => {
      const customRules = { wordsToAlwaysLowerCase: ["hello"] };
      expect(constantCase("hello world", customRules)).toBe("hello_WORLD");
    });
  });

  describe("dotCase", () => {
    test("converts simple string to dot case", () => {
      expect(dotCase("hello world")).toBe("hello.world");
    });

    test("handles single word", () => {
      expect(dotCase("hello")).toBe("hello");
    });

    test("converts all uppercase string", () => {
      expect(dotCase("HELLO WORLD")).toBe("hello.world");
    });

    test("handles string with numbers and special characters", () => {
      expect(dotCase("hello world 123!")).toBe("hello.world.123!");
    });

    test("applies custom rules to uppercase specific words", () => {
      const customRules = { wordsToAlwaysUpperCase: ["world"] };
      expect(dotCase("hello world", customRules)).toBe("hello.WORLD");
    });
  });

  describe("pathCase", () => {
    test("converts simple string to path case", () => {
      expect(pathCase("hello world")).toBe("hello/world");
    });

    test("handles single word", () => {
      expect(pathCase("hello")).toBe("hello");
    });

    test("converts all uppercase string", () => {
      expect(pathCase("HELLO WORLD")).toBe("hello/world");
    });

    test("handles string with numbers and special characters", () => {
      expect(pathCase("hello world 123!")).toBe("hello/world/123!");
    });

    test("applies custom rules to uppercase specific words", () => {
      const customRules = { wordsToAlwaysUpperCase: ["world"] };
      expect(pathCase("hello world", customRules)).toBe("hello/WORLD");
    });
  });
});
