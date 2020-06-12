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
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "__snapshots__/*",
          "**/*.test.js",
          "setupTests.js"
        ]
      }
    ],
    "no-unused-vars": [
      "warn",
      {
        "args": "none",
        "varsIgnorePattern": "PropTypes|React|classNames" // These are all used by everything anyway, so leave for consistency
      }
    ],
    "react/prop-types": [
      "off" // Turn this back on if we decide to populate all components' propTypes
    ]
  }
}
