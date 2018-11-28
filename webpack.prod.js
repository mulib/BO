const merge = require('webpack-merge');
const webpackCommon = require('./webpack.common.js');
module.exports = merge(webpackCommon, {
    mode: 'production',
    devtool: 'source-map',
    externals: {
        'Config': JSON.stringify(Object.assign(require('./config/default.json'), require('./config/prod.json')))
    }
});