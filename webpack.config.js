const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'app.js'),
    output: {
        filename: '[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 5000,
        contentBase: path.join(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            inject: 'body'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}