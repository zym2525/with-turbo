module.exports = {
  '*.{js,jsx,ts,tsx},!src/TUIKit/**/*': ['eslint --fix', 'prettier --write'],
  '{!(package)*.json,.!(browserslist)*rc},!src/TUIKit/**/*': ['prettier --write--parser json'],
  'package.json': ['prettier --write'],
  '*.vue,!src/TUIKit/**/*': ['eslint --fix', 'prettier --write', 'stylelint --fix'],
  '*.{vue,css,scss,postcss,less},!src/TUIKit/**/*': ['stylelint --fix', 'prettier --write'],
  '*.md': ['prettier --write'],
};
