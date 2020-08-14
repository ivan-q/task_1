const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

  // This option controls if and how source maps are generated.
  // https://webpack.js.org/configuration/devtool/
  devtool: 'eval-cheap-module-source-map',

  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: {
    index: './src/page-index/main.js',
    // about: './src/page-about/main.js',
    // contacts: './src/page-contacts/main.js'
  },

  
  devServer: {
    port: 4040,
    writeToDisk: false
  },

  module: {
    rules: [
      { //babel
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      { //sass
        test: /\.(css|scss|sass)(\?.*)?$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          // Please note we are not running postcss here
        ]
      },
      { //pug
        test: /\.pug$/,
        use: 'pug-loader'
      },
      { // Load all images as base64 encoding if they are smaller than 8192 bytes
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // On development we want to see where the file is coming from, hence we preserve the [path]
              name: '[path][name].[ext]?hash=[hash:20]',
              esModule: false,
              limit: 8192
            }
          }
        ]
      }
    ]
  },

  // https://webpack.js.org/concepts/plugins/
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/page-index/tmpl.pug',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    }),
    // new HtmlWebpackPlugin({
    //   template: './src/page-about/tmpl.html',
    //   inject: true,
    //   chunks: ['about'],
    //   filename: 'about.html'
    // }),
    // new HtmlWebpackPlugin({
    //   template: './src/page-contacts/tmpl.html',
    //   inject: true,
    //   chunks: ['contacts'],
    //   filename: 'contacts.html'
    // }),
    
    // new MiniCssExtractPlugin({
    //   filename: "[name].css",
    // })
  ]
}
