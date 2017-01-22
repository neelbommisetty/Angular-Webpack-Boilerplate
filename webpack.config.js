const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  devServer: {
    port: 3000,
    contentBase: '/build/',
    stats: 'minimal',
  },
  entry: [
    './src/app.js',
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/',
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'index.html',
    }),
  ],
  module: {
    loaders: [
    // js
      {
        test: /\.js$/,
        loaders: ['ng-annotate', 'babel'],
        include: path.join(__dirname, 'src/'),
      },
      // CSS
      {
        test: /\.s[c|a]ss$/,
        include: path.join(__dirname, 'src/'),
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        // Do not transform vendor's CSS with CSS-modules
        // The point is that they remain in global scope.
        // Since we require these CSS files in our JS or CSS files,
        // they will be a part of our compilation either way.
        // So, no need for ExtractTextPlugin here.
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader'],
      }, {
        test: /\.(jpg|png|gif)$/,
        loaders: [
          'file-loader',
          `image-webpack?{
            progressive:true,
            optimizationLevel: 7,
            interlaced: false,
            pngquant:{
                quality: "65-90",
                speed: 4
              }
            }`,
        ],
      }, {
        test: /\.html$/,
        loader: 'html-loader',
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      }, {
        test: /\.(mp4|webm)$/,
        loader: 'url-loader?limit=10000',
      },

      // font awesome
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+|\?.*)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+|\?.*)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+|\?.*)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+|\?.*)?$/,
        loader: 'file',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+|\?.*)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml',
      },
    ],
  },
};
