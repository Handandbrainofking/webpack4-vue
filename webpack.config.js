const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

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
        overlay: true,
        headers: {
            'X-Custom-User': 'Nick'
        }
    },
    devtool: 'cheap-module-eval-source-map',
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'//compiler mode config
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
        new HtmlWebpackPlugin({
            title: 'my webpack4',
            template: './templates/index.html',
            inject: 'false',
            date: new Date(),
            userName: 'Nick',
            favicon: './favicon.ico',
            templateParameters: {
                title: 'hello webpack',
            },
            minify: {
                removeComments: false,//删除html模版注释
                collapseWhitespace: false//删除空白符和换行符,生成压缩丑化的html模版
            },
            hash: true //添加hash到css和js文件后面，接触hash
        }),
        new HtmlWebpackPlugin({
            filename: 'page_404.html',//打包后的模版的名称
            template: './templates/404.html',//模版的来源
            title: 'Page Error 404!',
            inject: false
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname,'src/assets'),
                // to:  path.resolve(__dirname, 'dist/assets/[name].[hash].[ext]'),
                to:  path.resolve(__dirname, 'dist/assets/'),
                ignore: ['.*']
            }
        ]),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(false),
            VERSION: JSON.stringify("5fa3b9"),
        })
    ]
}
