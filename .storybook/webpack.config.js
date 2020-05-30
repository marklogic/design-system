const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');
const path = require('path');
const themeVariables = require('../src/theme-variables.json')

module.exports = async ({ config }) => {
  // config.module.rules.push({
  //   test: /\.(stories|story)\.mdx$/,
  //   use: [
  //     {
  //       loader: 'babel-loader',
  //       options: {
  //         presets: [["env", {modules: false}]],
  //       }
  //       // may or may not need this line depending on your app's setup
  //       //plugins: ['@babel/plugin-transform-react-jsx'],
  //     },
  //     {
  //       loader: '@mdx-js/loader',
  //       options: {
  //         compilers: [createCompiler({})],
  //       },
  //     },
  //   ],
  // });
  config.module.rules.push({
    test: /\.(stories|story)\.[tj]sx?$/,
    loader: require.resolve('@storybook/source-loader'),
    exclude: [/node_modules/],
    enforce: 'pre',
  });
  config.module.rules.splice(0, 0, {
    test: /\.jsx?$/,
    sideEffects: true,
    use: [
      {
        loader: 'babel-loader',
        options: {
          babelrc: true,
        //   plugins: [
        //     ["import", {libraryName: "antd", style: true, libraryDirectory: "es"}, "antd"],
        //     ["import", {
        //       libraryName: "@marklogic/design-system",
        //       libraryDirectory: "src",
        //       camel2DashComponentName: false,
        //       style: true,
        //     }, "@marklogic/design-system"],
        //   ]
        }
      }
    ],
  })
  config.module.rules.push({
    test: /\.less/,
    loaders: [
      "style-loader",
      "css-loader",
      {
        loader: "less-loader",
        options: {
          javascriptEnabled: true,
          paths: [
            path.resolve(__dirname, '../node_modules'),
            path.resolve(__dirname, '../src'),
          ],
          modifyVars: themeVariables,
        },
      },
    ],
    include: [
      path.resolve(__dirname, '../node_modules/'),
      path.resolve(__dirname, '../stories/'),
      path.resolve(__dirname, '../src/'),
    ]
  });
  // config.resolve.alias['@marklogic/design-system/src'] = path.resolve(__dirname, '../src')
  // config.resolve.alias['@marklogic/design-system'] = path.resolve(__dirname, '../src')
  config.resolve.alias['antd'] = path.resolve(__dirname, '../node_modules/antd')

  // DEBUG Fix stringify for regexes
  Object.defineProperty(RegExp.prototype, "toJSON", {
    value: RegExp.prototype.toString
  });
  // console.log("Storybook webpack config:\n", JSON.stringify(config, null, '  '))
  // DEBUG end

  return config;
};
