const path = require('path')
const {
  override,
  babelInclude,
  addLessLoader,
} = require('customize-cra')
const themeVariables = require('../src/theme-variables.json')

module.exports = override(
  // Required for using marklogic-ui-library
  addLessLoader({
    javascriptEnabled: true,
    // This is how you change `less` theme variables
    // Refer to theme vars below
    // https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
    modifyVars: themeVariables,
  }),
  babelInclude([
    path.resolve(__dirname, 'src'),
    /design-system/, // Required for @marklogic/design-system to compile
    // In a real environment (where node_modules paths are guaranteed),
    // you may use /@marklogic\/design-system/ for specificity
  ]),
)
