const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        contentBase: './dist',
        port: 9999,
        open: false,
        historyApiFallback: true,
        overlay: true
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[hash:7].[ext]',
                        outputPath: 'img',
                        limit: 10000,
                    }
                }
            },
            {
                test: /\.(eot|ttf|svg)$/,
                use: {
                    loader: 'file-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader?indentedSyntax'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlwebpackPlugin({
            template: './index.html',
            title: '文档：webpack 4 demo',
            inject: 'body',
            favicon: './favicon.ico',
            date: new Date(),
            userName: 'Nick'
        })
    ]
}
