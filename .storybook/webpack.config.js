const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');
const path = require('path');
const webpack = require("webpack");
const through = require('through2');

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.(stories|story)\.mdx$/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: [["env", {modules: false}]],
        }
        // may or may not need this line depending on your app's setup
        //plugins: ['@babel/plugin-transform-react-jsx'],
      },
      {
        loader: '@mdx-js/loader',
        options: {
          compilers: [createCompiler({})],
        },
      },
    ],
  });
  config.module.rules.push({
    test: /\.(stories|story)\.[tj]sx?$/,
    loader: require.resolve('@storybook/source-loader'),
    exclude: [/node_modules/],
    enforce: 'pre',
  });
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
          ]
        },
      },
    ],
    include: [
      path.resolve(__dirname, '../node_modules/'),
      path.resolve(__dirname, '../stories/'),
      path.resolve(__dirname, '../src/'),
    ]
  });
  config.resolve.alias['marklogic-ui-library'] = path.resolve(__dirname, '../src')
  config.resolve.alias['antd'] = path.resolve(__dirname, '../node_modules/antd')

  // DEBUG Fix stringify for regexes
  Object.defineProperty(RegExp.prototype, "toJSON", {
    value: RegExp.prototype.toString
  });
  console.log("Storybook webpack config:\n", JSON.stringify(config, null, '  '))
  // DEBUG end

  return config;
};
