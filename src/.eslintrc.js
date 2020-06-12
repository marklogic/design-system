module.exports = {
  "extends": [
    "plugin:jest-dom/recommended"
  ],
  "env": {
    "jest": true
  },
  "plugins": [
    "jest-dom",
    "import"
  ],
  "rules": {
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": ["__snapshots__/*", "**/*.test.js", "setupTests.js"]
    }]
  }
}
