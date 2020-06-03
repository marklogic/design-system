module.exports = function(api) {
  console.log('BABEL ENV IS: ' + api.env())
  if (api.env(['production', 'development'])) {
    return {
      presets: [
        ['@babel/preset-env', {
          modules: false,
        }],
        '@babel/preset-react',
      ],
      plugins: [
      ],
    }
  }
  // react-scripts Jest (env="test") does not read from this file, so no setting for it here
  return {}
}
