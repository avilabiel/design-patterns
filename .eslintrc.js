// To understand more: https://www.notion.so/trio/TCP-Standards-c0be80efac194dab84a1eb809ae1c03d
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'airbnb-typescript/base',
  ],
  parserOptions: {
    project: './tsconfig.json',
  }
};
