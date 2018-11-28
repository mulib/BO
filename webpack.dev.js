const merge = require('webpack-merge')
const webpack = require('webpack');
const hotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin()
module.exports = merge(require('./webpack.common'), {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './dist', // This tells webpack-dev-server to serve the files from the dist directory
        hot: true
    },
    plugins: [
        hotModuleReplacementPlugin
    ],
    externals: {
        'Config': JSON.stringify(require('./config/default.json'))
    }
});