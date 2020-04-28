const path = require('path')
const { override, fixBabelImports, babelInclude, addLessLoader } = require('customize-cra')
const themeVariables = require('marklogic-ui-library/src/theme-variables.json')

module.exports = override(
  // Both of these are required for using marklogic-ui-library as an ES module
  fixBabelImports('import', [
    {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true, // This is required so that the less files from antd are included
    },
    {
      libraryName: 'marklogic-ui-library',
      libraryDirectory: 'src',
      camel2DashComponentName: false,
      style: true,
    },
  ]),
  // Required for using marklogic-ui-library
  addLessLoader({
    javascriptEnabled: true,
    // This is how you change `less` theme variables
    // Refer to theme vars below
    // https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
    modifyVars: themeVariables,
  }),
  // This must include any source files that import marklogic-ui-library (or JSX, etc)
  // that needs compilation
  babelInclude([
    path.resolve(__dirname, 'src'),
    /marklogic-ui-library/,
    /ant/,
    /node_modules/,
  ]),
)
