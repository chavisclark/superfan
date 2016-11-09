var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWbPackPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var path = require('path');

var HtmlWbPackPluginConfig = new HtmlWbPackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
    entry: {
        'main': './app',
    },
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: './'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: __dirname + '/node_modules/react-dates'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                include: __dirname + '/app',
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.(jpg|png)$/, loader: "url-loader?name=img/img-[hash:6].[ext]"
            },
            {   
                test: /\.svg$/, loader: 'babel!react-svg', include: __dirname + '/node_modules/react-dates' 
            }
        ],
    },
    plugins: [
        HtmlWbPackPluginConfig,
        new ExtractTextPlugin("styles.css"),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            proxy: 'http://localhost:8080/'
        }),
    ],
  devServer: {
    historyApiFallback: true
  }
};