const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const Config = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.js[x]?$/, use: 'babel-loader' },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader'] }
        ]
    },
    plugins: [new HTMLWebpackPlugin({
        template: 'app/index.html'
    })]
};

module.exports = Config;