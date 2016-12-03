var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var PATH = require("./build_path");
var config = require('./webpack.main.js');

config.plugins = [
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify("production")
        }
    })
    ,
    new ExtractTextPlugin('weui.min.css'),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        mangle: false
    }),
    new HtmlWebpackPlugin({
        template: path.join(PATH.ROOT_PATH, 'app/index.html')
    }),
    new OpenBrowserPlugin({ url: 'http://127.0.0.1:8080' })
];

module.exports = config;
