export interface customRules {
  wordsToAlwaysCapitalize?: string[];
  wordsToAlwaysLowerCase?: string[];
  wordsToAlwaysUpperCase?: string[];
  wordsToNeverTransform?: string[];
}

export interface customRulesSet {
  wordsToAlwaysCapitalize?: Set<string>;
  wordsToAlwaysLowerCase?: Set<string>;
  wordsToAlwaysUpperCase?: Set<string>;
  wordsToNeverTransform?: Set<string>;
}
