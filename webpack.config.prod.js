const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const NgAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
  entry: [
    './src/app.js',
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[chunkhash].min.js',
    chunkFilename: '[name].[chunkhash].chunk.js',
    publicPath: '/build/',
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: (module) => module.resource &&
        module.resource.indexOf(path.resolve(__dirname, 'src')) === -1,
      async: true,
    }),
    new NgAnnotatePlugin({
      add: true,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
    new ExtractTextPlugin('[name].[contenthash].min.css'),
    new webpack.PrefetchPlugin('angular'),
  ],
  module: {
    loaders: [
    // js
      {
        test: /\.js$/,
        loaders: ['ng-annotate', 'babel'],
        include: path.join(__dirname, 'src/'),
      },
      // sass
      {
        test: /\.s[c|a]ss$/,
        include: path.join(__dirname, 'src/'),
        loader: ExtractTextPlugin
          .extract('style-loader', 'css-loader!sass-loader'),
      },
      // css
      {
        test: /\.css$/,
        loader: ExtractTextPlugin
        .extract('style-loader', 'css-loader'),
      },
      {
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
