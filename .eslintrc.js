module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "standard",
    "standard-react",
    "plugin:jest-dom/recommended"
  ],
  "env": {
    "es6": true,
    "jest": true
  },
  "plugins": [
    "react",
    "jest-dom"
  ],
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    // don't force es6 functions to include space before paren
    "space-before-function-paren": 0,

    // allow specifying true explicitly for boolean props
    "react/jsx-boolean-value": 0,

    "comma-dangle": ["error", "always-multiline"],
    "eol-last": ["error", "always"]
  }
}
