const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');
const path = require('path');
const themeVariables = require('../src/theme-variables.json')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  stories: [
    '../stories/*.stories.jsx',
    '../stories/*.stories.mdx'
  ],
  addons: [
    // '@storybook/preset-create-react-app', // Seems to break other stuff about Less, so leave this out
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-docs',
  ],
  webpackFinal: async (config, {configType}) => {
    config.module.rules.push({
      test: /\.(stories|story)\.[tj]sx?$/,
      loader: require.resolve("@storybook/source-loader"),
      exclude: [/node_modules/],
      enforce: "pre",
    });
    config.module.rules.push({
      test: /\.jsx?$/,
      use: [
        {
          loader: "babel-loader",
          options: {
            plugins: [
              ["import", {libraryName: "antd", style: true, libraryDirectory: "es"}, "antd"],
              ["import", {
                libraryName: "@marklogic/design-system",
                libraryDirectory: "src",
                camel2DashComponentName: false,
                style: true,
              }, "@marklogic/design-system"],
            ],
          },
        },
      ],
      include: path.resolve(__dirname, '..'),
    });
    // This Less config is not currently working, and is patched by importing dist/index.css in preview.js.
    // Keeping this here in case of any future attempts at getting it working as a first-class citizen
    config.module.rules.push({
      test: /\.less/,
      sideEffects: true,
      loaders: [
        (config.mode === "PRODUCTION" ? MiniCssExtractPlugin.loader : "style-loader"),
        "css-loader",
        {
          loader: "less-loader",
          options: {
            javascriptEnabled: true,
            paths: [
              path.resolve(__dirname, "../node_modules"),
              path.resolve(__dirname, "../src"),
            ],
            modifyVars: themeVariables,
          },
        },
      ],
      include: [
        path.resolve(__dirname, "../node_modules/"),
        path.resolve(__dirname, "../stories/"),
        path.resolve(__dirname, "../src/"),
      ],
    });
    config.resolve.alias["@marklogic/design-system/src"] = path.resolve(__dirname, "../src");
    config.resolve.alias["@marklogic/design-system"] = path.resolve(__dirname, "../src");
    config.resolve.alias["antd"] = path.resolve(__dirname, "../node_modules/antd");

    config.plugins.push(new MiniCssExtractPlugin({filename: "[name].module.css"}));

    // DEBUG Fix stringify for regexes
    // Object.defineProperty(RegExp.prototype, "toJSON", {
    //   value: RegExp.prototype.toString,
    // });
    // console.log("Storybook webpack config:\n", JSON.stringify(config, null, "  "));
    // DEBUG end

    return config;
  },
};
