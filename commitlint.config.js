export default {
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'chore']],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'type-case': [0],
    'header-pattern': [
      2,
      'always',
      '^(feat|fix|chore)(!)?: [a-zA-Z0-9_-]+$'
    ],
  },
};
