const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const Config = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.js[x]?$/, use: 'babel-loader' },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader'] }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [new HTMLWebpackPlugin({
        template: 'app/index.html'
    })]
};

module.exports = Config;