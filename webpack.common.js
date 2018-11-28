const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css'
})

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader', // compiles Sass to CSS, using Node Sass by default
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        miniCssExtractPlugin,
    ]
};