module.exports = function(api) {
  console.log('ENV IS: ' + api.env())
  if (api.env(['production', 'development'])) {
    return {
      presets: [
        ['@babel/preset-env', {
          modules: false,
        }],
        '@babel/preset-react',
      ],
      plugins: [
    //     ['module-resolver', {
    //       alias: {
    //         '^@marklogic/design-system/(.*)$': './src/\\1',
    //       },
    //     }],
    //     [
    //       'import',
    //       {
    //         libraryName: '@marklogic/design-system',
    //         customName: (name) => {
    //           const customNamePath = require('path').resolve(__dirname, `./src/${name}`)
    //           console.log('\nMODIFYING COMPONENT IMPORT: ' + customNamePath)
    //           return customNamePath
    //         },
    //         // libraryDirectory: 'src',
    //         camel2DashComponentName: false,
    //         // style: true,
    //         customStyleName: (name) => {
    //           const customStylePath = require('path').resolve(__dirname, `./src/${name}/style`)
    //           console.log('\nADDING STYLE IMPORT: ' + customStylePath)
    //           return customStylePath
    //         },
    //       },
    //       '@marklogic/design-system',
    //     ],
    //     [
    //       'import',
    //       {
    //         libraryName: 'antd',
    //         style: true,
    //         libraryDirectory: 'es',
    //       },
    //       'antd',
    //     ],
        '@babel/plugin-proposal-class-properties',
      ],
    }
  }
  if (api.env('test')) {
    return {
      presets: [
        '@babel/preset-react',
        ['@babel/preset-env', {
          targets: {
            node: 'current',
          },
        }],
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties',
      ],
    }
  }
  return {}
}
