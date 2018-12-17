const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const mode = isProd ? 'production' : 'development';
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = [
    {
        loader: MiniCssExtractPlugin.loader,
        options: {
            publicPath: './dist',
        }
    },
    "css-loader",
    "sass-loader"
];
const cssConfig = isProd ? cssProd : cssDev;

module.exports = {
    mode: mode,
    entry: {
        app: './src/index.js',
        contact: './src/contact.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        stats: 'errors-only',
        open: true
    },
    module: {
        rules: [
            {
                test: /\.sass$/,
                use: cssConfig                  
            },
            { 
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"    
            },
            { 
                test: /\.pug$/,
                loader: "pug-loader"    
            },
            { 
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader?name=[name].[ext]&outputPath=images/"    
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            excludeChunks: ['contact'],
            filename: 'index.html',
            template: './src/index.pug'
        }),
        new HtmlWebpackPlugin({
            title: 'contact',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            chunks: ['contact'],
            filename: 'contact.html',
            template: './src/contact.ejs'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
}