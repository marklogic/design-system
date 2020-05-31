const createCompiler = require("@storybook/addon-docs/mdx-compiler-plugin");
const path = require("path");
const themeVariables = require("../src/theme-variables.json");

module.exports = async ({config}) => {
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
    loader: require.resolve("@storybook/source-loader"),
    exclude: [/node_modules/],
    enforce: "pre",
  });
  config.module.rules.splice(0, 0, {
    test: /\.jsx?$/,
    sideEffects: true,
    use: [
      {
        loader: "babel-loader",
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
        },
      },
    ],
  });
  let isEnvProduction = true;
  let shouldUseSourceMap = true;
  const postcssNormalize = require("postcss-normalize");
  config.module.rules.push({
    test: /\.less$/,
    sideEffects: true,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          importLoaders: 3,
        },
      },
      {
        // Options for PostCSS as we reference these options twice
        // Adds vendor prefixing based on your specified browser support in
        // package.json
        loader: require.resolve("postcss-loader"),
        options: {
          // Necessary for external CSS imports to work
          // https://github.com/facebook/create-react-app/issues/2677
          ident: "postcss",
          plugins: () => [
            require("postcss-flexbugs-fixes"),
            require("postcss-preset-env")({
              autoprefixer: {
                flexbox: "no-2009",
              },
              stage: 3,
            }),
            // Adds PostCSS Normalize as the reset css with default options,
            // so that it honors browserslist config in package.json
            // which in turn let's users customize the target behavior as per their needs.
            postcssNormalize(),
          ],
          sourceMap: isEnvProduction && shouldUseSourceMap,
        },
      },
      {
        loader: require.resolve("resolve-url-loader"),
        options: {
          sourceMap: isEnvProduction && shouldUseSourceMap,
        },
      },
      {
        loader: "less-loader",
        options: {
          // javascriptEnabled: true,
          paths: [
            path.resolve(__dirname, "../node_modules"),
            path.resolve(__dirname, "../src"),
            "src",
            "../src",
          ],
          modifyVars: themeVariables,
        },
      },
    ],
    include: [
      path.resolve(__dirname, "../node_modules/"),
      path.resolve(__dirname, "../stories/"),
      path.resolve(__dirname, "../src/"),
      path.resolve(__dirname, ".."),
      // 'src',
      // '../src',
    ],
  });
  // config.module.rules.push(
  //   {
  //     test: /\.less$/,
  //     use: ['style-loader', 'css-loader', 'resolve-url-loader', {loader: 'less-loader', options: {javascriptEnabled: true}}],
  //     include: [
  //       path.resolve(__dirname, '@marklogic/design-system'),
  //       path.resolve(__dirname, '../src/'),
  //       path.resolve(__dirname, '../stories'),
  //     ]
  //   }
  // )
  // config.resolve.alias['@marklogic/design-system/src'] = path.resolve(__dirname, '../src')
  // config.resolve.alias['@marklogic/design-system'] = path.resolve(__dirname, '../src')
  config.resolve.alias["antd"] = path.resolve(__dirname, "../node_modules/antd");

  config.resolve.extensions.push(".less");

  config.resolve.modules = config.resolve.modules.concat([
    path.resolve("./"),
    path.resolve("./src"),
    "node_modules",
    "shared",
    "src",
  ]);

  // DEBUG Fix stringify for regexes
  Object.defineProperty(RegExp.prototype, "toJSON", {
    value: RegExp.prototype.toString,
  });
  // console.log("Storybook webpack config:\n", JSON.stringify(config, null, '  '))
  // DEBUG end

  return config;
};
