var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
   entry: './main.js',
   output: {
      path: __dirname + '/dist',
      filename: 'bundle.js',
   },
   plugins: [new HtmlWebpackPlugin({title: 'Hello React APP', template: 'index.html'})],
   devServer: {
      inline: true,
      port: 7777
   },
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}
module.exports = config;
