var HtmlWbPackPlugin = require('html-webpack-plugin');

var HtmlWbPackPluginConfig = new HtmlWbPackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})


module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.css$/, loader: "style-loader!css-loader"},
      {test: /\.(jpg|png)$/, loader: "url-loader?name=img/img-[hash:6].[ext]"}
    ]
  },
  plugins: [HtmlWbPackPluginConfig],
  
  devServer: {
    port: 7725,
    historyApiFallback: true
  }
}
