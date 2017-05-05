const webpack = require('webpack');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';
const isDevelopment = NODE_ENV === 'development';
const isProduction = !isDevelopment;

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    home: './home',
    about: './about',
    common: ['./console', './common'],
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: '[name].js',
    library: '[name]',
  },

  watch: isDevelopment,
  watchOptions: {
    aggregateTimeout: 100,
    ignored: /node_modules/,
  },

  devtool: isDevelopment ? 'cheap-inline-source-map' : false,

  plugins: [
    new webpack.DefinePlugin({
      DEVELOPMENT: JSON.stringify(isDevelopment),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: 2,
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
            plugins: ['syntax-dynamic-import'],
          },
        },
      },
    ],
  },
};

if (isProduction) {
  const plugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      drop_console: true,
      unsafe: true,
    },
  });
  module.exports.plugins.push(plugin);
}
