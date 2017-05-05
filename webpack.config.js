const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: './src/home.js',
  output: {
    filename: './public/bundle.js',
    library: 'home',
  },

  watch: NODE_ENV === 'development',
  watchOptions: {
    aggregateTimeout: 100,
    ignored: /node_modules/,
  },

  devtool: NODE_ENV === 'development' ? 'cheap-inline-source-map' : false,
};
