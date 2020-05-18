const path = require('path')
const {
  override,
  babelInclude,
  addLessLoader,
  fixBabelImports,
} = require('customize-cra')

const themeVariables = require('../src/theme-variables.json')

module.exports = override(
  // All three of these are required for using marklogic-ui-library as an ES module
  fixBabelImports('@marklogic/design-system',
    {
      libraryDirectory: 'es',
      camel2DashComponentName: false,
      style: true,
    },
  ),
  fixBabelImports('@marklogic/design-system/MLIcon',
    {
      libraryDirectory: '',
      camel2DashComponentName: false,
      customName: function (name) {
        return `@marklogic/design-system/es/MLIcon/${name}`
      },
      style: function() {
        return "@marklogic/design-system/es/MLIcon/style"
      },
    },
  ),
  fixBabelImports(
    'antd', {
      libraryDirectory: 'es',
      style: true,
    },
  ),
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
