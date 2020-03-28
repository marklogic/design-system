const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');
const path = require('path');
const webpack = require("webpack");
const through = require('through2');

module.exports = async ({ config }) => {
//   Object.assign(config.optimization,
//   {
//     sideEffects: true,
//     usedExports: true,
//   },
// }
//   config.plugins.push(
//     new webpack.ContextReplacementPlugin(
//       /^antd/,
//       /~antd/,
//     )
//   )
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
    test: /\.less$/,
    loaders: [
      "style-loader",
      "css-loader",
      {
        loader: "less-loader",
        options: {
          // lessOptions: {
          //   paths: [path.resolve(__dirname, '../node_modules')],
          // },
          javascriptEnabled : true,
        }
      },
      // {
      //   loader: 'transform-loader?0',
      //   options: {
      //     transforms: [
      //       function transform(file) {
      //         return through(function(buf) {
      //           this.queue(buf.replace("@import 'antd", "@import '~antd"))
      //         }, function() {this.queue(null)})
      //       }
      //     ]
      //   }
      // }
      // {
      // }
    ],
    include: [
      // path.resolve(__dirname, '../src/'),
      path.resolve(__dirname, '../node_modules/antd/'),
      path.resolve(__dirname, '../stories/'),
    ]
  });
  // config.resolve.extensions.push('.less')
  config.resolve.alias['marklogic-ui-library/index.css'] = path.resolve(__dirname, '../dist/index.css')
  config.resolve.alias['marklogic-ui-library$'] = path.resolve(__dirname, '../dist/index.es.js')
  // config.resolve.alias['antd'] = './node_modules/antd'
  // config.resolve.alias['antd'] = '/Users/phoenix/Code/work/greenmars/marklogic/design-system/node_modules/antd'
  // config.resolve.alias['antd/dist/antd.less'] = '/Users/phoenix/Code/work/greenmars/marklogic/design-system/node_modules/antd/dist/antd.less'
  console.log("Storybook Webpack config: " + JSON.stringify(config, null, '  '))
  console.log(path.resolve(__dirname, '../node_modules'))
  return config;
};
