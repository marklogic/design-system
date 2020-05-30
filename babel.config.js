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
        [
          'import',
          {
            libraryName: 'antd',
            style: true,
            libraryDirectory: 'es',
          },
          'antd',
        ],
        [
          'import',
          {
            libraryName: '@marklogic/design-system',
            libraryDirectory: 'src',
            camel2DashComponentName: false,
            style: true,
          },
          '@marklogic/design-system',
        ],
        '@babel/plugin-proposal-class-properties',
        ['module-resolver', {
          root: ['./src'],
          alias: {
            // "@marklogic/design-system/src": "./src",
            '@marklogic/design-system': './src',
          },
        }],
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
