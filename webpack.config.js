const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'build.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            esModule: false,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: 'less-loader',
                    },
                ],
            },
            {
                test: /\.(png|gif|svg|jpe?g)$/,
                type: 'asset',
                generator: {
                    filename: 'img/[name].[hash:6][ext]',
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 500 * 1024,
                    },
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx', '.jsx'],
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx', '.jsx'],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'hexiechuangxin',
            template: './public/index.html',
        }),
    ],
};
