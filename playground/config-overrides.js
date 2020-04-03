const path = require('path')
const {
  override,
  addWebpackPlugin,
  fixBabelImports,
  babelInclude,
  addLessLoader,
  addWebpackAlias,
  removeModuleScopePlugin,
  babelExclude,
} = require('customize-cra')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')

module.exports = override(
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
  fixBabelImports('import', [
    {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    },
    {
      libraryName: 'marklogic-ui-library',
      libraryDirectory: 'dist',
    },
  ]),
  addLessLoader({
    javascriptEnabled: true,
    paths: [
      path.resolve(__dirname, '../node_modules'),
      path.resolve(__dirname, '../src'),
    ],
  }),
  removeModuleScopePlugin(),
  addWebpackAlias({
    antd: path.resolve(__dirname, 'node_modules/antd'),
  }),
  babelInclude([
    path.resolve(__dirname, 'src'),
    path.resolve(__dirname, '../src'),
    path.resolve(__dirname, 'node_modules'),
    path.resolve(__dirname, 'node_modules/marklogic-ui-library'),
    // path.resolve('../src'),
  ]),
  babelExclude([
    path.resolve('node_modules/marklogic-ui-library/node_modules'),
  ]),
)
// Refer to theme vars below
// https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
