// @ts-check

module.exports = {
  extends: '@sourcegraph/eslint-config',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    EXPERIMENTAL_useSourceOfProjectReferenceRedirect: true,
    project: [__dirname + '/tsconfig.json'],
  },
  overrides: [
    {
      files: ['*.d.ts'],
      rules: {
        'no-restricted-imports': 'off',
      },
    },
    {
      files: '*.story.tsx',
      rules: {
        'react/forbid-dom-props': 'off',
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['**/gulpfile.js', '**/story/**.tsx', '**/story/**.ts', '*.story.tsx'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
  rules: {
    'id-length': 'off',
    'no-console': 'off',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['!@sourcegraph/cody-shared/*'], // allow any imports from the @sourcegraph/cody-shared package
      },
    ],
    'unicorn/filename-case': 'off',
    'unicorn/expiring-todo-comments': 'off',
    'arrow-body-style': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
}
