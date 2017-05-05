module.exports = {
  entry: './src/home.js',
  output: {
    filename: './public/bundle.js',
    library: 'home',
  },

  watch: true,
  watchOptions: {
    aggregateTimeout: 100,
    ignored: /node_modules/,
  },
};
