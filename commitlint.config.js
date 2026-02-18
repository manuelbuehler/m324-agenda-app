export default {
  parserPreset: {
    parserOpts: {
      headerPattern: /^(feat|fix|chore)(!)?: (.+)$/,
      headerCorrespondence: ['type', 'breaking', 'subject'],
    },
  },
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'chore']],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'type-case': [0],
    'subject-case': [0],
  },
};
