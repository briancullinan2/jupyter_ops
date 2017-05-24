const webpack = require('webpack');
const helpers = require('./helpers');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['ts-loader', 'angular2-template-loader', 'angular2-router-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'

            },
            /*{
             test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
             loader: 'null-loader'
             },*/
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader?sourceMap'}) //'null'
            },
            {
                test: /\.less$/,
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader?sourceMap!less-loader'}) //'null'
            },
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                loaders: ['css-to-string-loader', 'css-loader', 'raw-loader']
            },
            {
                test: /\.less$/,
                include: helpers.root('src', 'app'),
                loader: 'raw-loader!less-loader'
            },
            {
                test: /\.scss$/,
                loaders: ['css-to-string-loader', 'css-loader', 'sass-loader']
            }
        ]
    },

    node: {
        net: 'empty',
        dns: 'empty'
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                emitErrors: true
            }
        }),
    ]
};
