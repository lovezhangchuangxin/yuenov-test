# webpack创建

如不知道webpack的详细用法，可以参考：

[webpack5快速入门，船新版本，建议收藏 (ฅ´ω`ฅ)_北极光之夜。-CSDN博客](https://blog.csdn.net/luo1831251387/article/details/120594132)



## 安装依赖

因为要安装的依赖太多，写成列表的形式：

- webpack
- webpack-cli
- css-loader
- style-loader
- postcss-loader
- postcss-preset-env
- ts-loader
- babel-loader
- less
- less-loader
- clean-webpack-plugin
- html-webpack-plugin



## 创建webpack.config.js

```js
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "build.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            esModule: false
                        }
                    },
                    {
                        loader: "postcss-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            },
            {
                test: /\.(png|gif|svg|jpe?g)$/,
                type: 'asset',
                generator: {
                    filename: 'img/[name].[hash:6][ext]'
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 500 * 1024
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ]
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'ts-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'hexiechuangxin',
            template: './public/index.html'
        })
    ]
}
```



## 创建.browserslistrc

```
> 1%
last 2 versions
not dead
```



## 创建postcss.config.js

```js
module.exports = {
    plugins: [
        require('postcss-preset-env')
    ]
}
```