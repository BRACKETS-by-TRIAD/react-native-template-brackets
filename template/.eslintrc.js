module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  ],
  plugins: ['reanimated', 'prettier', 'ts-exports', '10x'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        bracketSpacing: true,
        jsxBracketSameLine: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
      },
    ],
    '10x/auto-import': [
      'error',
      {
        imports: {
          useRef: "import {useRef} from 'react'",
          useEffect: "import {useEffect} from 'react'",
          useState: "import {useState} from 'react'",
          useCallback: "import {useCallback} from 'react'",
          useLocalObservable:
            "import {useLocalObservable} from 'mobx-react-lite'",
          observer: "import {observer} from 'mobx-react-lite'",
          styled: "import styled from 'react-native-styled.macro'",
        },
      },
    ],
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/prefer-interface': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/ban-types': 0,
  },
}
