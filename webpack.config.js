const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


let config = {
    entry : ['./src/index.js','./index.css'],
    output : {
        filename : 'index.js',
        path : path.resolve(__dirname,'docs'),
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test : /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            minimize: true
                        },
                    },
                    'css-loader',
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { 
                            minimize : true 
                        }
                    }
                ]
            },
        ]
    },
    plugins : [
        new MiniCssExtractPlugin({
            filename: 'index.css',
            chunkFilename: './docs/index.css',
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: './index.html',
            favicon: './assets/favicon.ico'
        }),
    ],
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    mode : 'production',
};

module.exports = config;