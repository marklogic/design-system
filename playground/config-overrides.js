const path = require('path')
const {
  override,
  fixBabelImports,
  babelInclude,
  addLessLoader,
} = require('customize-cra')
const themeVariables = require('@marklogic/design-system/src/theme-variables.json')

module.exports = override(
  // Required for using marklogic-ui-library
  addLessLoader({
    javascriptEnabled: true,
    // This is how you change `less` theme variables
    // Refer to theme vars below
    // https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
    modifyVars: themeVariables,
  }),
  // This must include any source files that import @marklogic/design-system (or JSX, etc)
  // that needs compilation
  babelInclude([
    path.resolve(__dirname, 'src'),
    /marklogic-ui-library/, // Required for the library to compile
  ]),
)
