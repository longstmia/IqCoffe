module.exports = {
  processors: ['stylelint-processor-styled-components'],

  plugins: ['stylelint-order'],

  extends: [
    'stylelint-config-recommended',
    'stylelint-config-standard-scss',
    'stylelint-config-styled-components',
    'stylelint-config-prettier',
    'stylelint-config-recess-order',
  ],

  rules: {},
};
