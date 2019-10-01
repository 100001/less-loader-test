const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

var config = {
    entry: {
        aless: './js/a.less.js',
        bless: './js/b.less.js',
        acss: './js/a.css.js',
        bcss: './js/b.css.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].js'
    },
    mode: 'production',

    module: {
        rules: [{
            test: /\.less$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'less-loader'
            ]
        }, {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:7].css'
        })
    ],
    optimization: {
        splitChunks: {
            minChunks: 2,
            minSize: 0,
            cacheGroups: {
                common: {
                    chunks: "all"
                }
            }
        },
        runtimeChunk: {
            name: 'manifest'
        }
    }
};
module.exports = config