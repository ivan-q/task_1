const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

  // This option controls if and how source maps are generated.
  // https://webpack.js.org/configuration/devtool/
  devtool: 'eval-cheap-module-source-map',

  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: {
    index: './src/page-index/main.js',
    catalog: './src/page-catalog/main.js',
    product: './src/page-product/main.js'
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

      { 
        //pug
        test: /\.(pug|jade)$/,
        use: 'pug-loader'
      },

      {
        // Fonts
        test: /\.(woff|woff2|eot|otf|ttf)$/,
        use: 'file-loader'
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
      template: './src/page-index/index.pug',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/page-catalog/catalog.pug',
      inject: true,
      chunks: ['catalog'],
      filename: 'catalog.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/page-product/product.pug',
      inject: true,
      chunks: ['product'],
      filename: 'product.html'
    }),
    
    // new webpack.ProvidePlugin({
    //   $: "jquery/dist/jquery.min.js",
    //   jQuery: "jquery/dist/jquery.min.js",
    //   "window.jQuery": "jquery/dist/jquery.min.js"
    // })

    // new MiniCssExtractPlugin({
    //   filename: "[name].css",
    // })
    
    
  ]
}
