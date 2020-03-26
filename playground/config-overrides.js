const path = require('path')
const { override, fixBabelImports, babelInclude, addLessLoader, removeModuleScopePlugin, babelExclude } = require('customize-cra')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    // modifyVars: {
    //   '@primary-color': '#127da1',
    // },
  }),
  removeModuleScopePlugin(),
  babelInclude([
    path.resolve('src'),
    path.resolve('node_modules/marklogic-ui-library'),
    // path.resolve('../src'),
  ]),
  babelExclude([
    path.resolve('node_modules/marklogic-ui-library/node_modules'),
  ]),
)
// Refer to theme vars below
// https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
