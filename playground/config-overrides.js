const path = require('path')
const { override, fixBabelImports, babelInclude, addLessLoader } = require('customize-cra')
const themeVariables = require('@marklogic/design-system/src/theme-variables.json')

module.exports = override(
  // Both of these are required for using @marklogic/design-system as an ES module
  fixBabelImports('import', [
    {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true, // This is required so that the less files from antd are included
    },
    {
      libraryName: '@marklogic/design-system',
      libraryDirectory: 'src',
    },
  ]),
  // Required for using @marklogic/design-system
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
  ]),
)
