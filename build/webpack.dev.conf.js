var path = require('path');
var webpack = require('webpack');
var webPackBaseConf = require('./webpack.base.conf');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');

var webpackDevConf = merge(webPackBaseConf, {
    entry: { index: [hotClient, path.resolve(__dirname, '../src/main.js')] },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
});

Object.keys(webpackDevConf.entry).forEach(function (name) {
    var extras = [hotClient];
    webpackDevConf.entry[name] = extras.concat(webpackDevConf.entry[name]);
});
module.exports = webpackDevConf;