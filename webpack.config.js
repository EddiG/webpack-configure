const webpack = require('webpack');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';
const isDevelopment = NODE_ENV === 'development';
const isProduction = !isDevelopment;

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './app',
    common: ['./console', './common'],
  },

  output: {
    path: path.resolve(__dirname, 'public/assets'),
    pathinfo: isDevelopment,
    publicPath: '/assets/',
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
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],

  module: {
    rules: [
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
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.jpg$/,
        use: {
          loader: 'file-loader?name=[path][name].[ext]&outputPath=img/',
        },
      },
    ],
  },

  externals: {
    lodash: '_',
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
