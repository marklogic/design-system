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
  return {}
}
