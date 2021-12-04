# Babel创建

如未用过babel，可参考如下资料：
[Babel 是什么？ · Babel 中文网 (babeljs.cn)](https://www.babeljs.cn/docs/)

简单来说：Babel 是一个 JavaScript 编译器，用来将浏览器不支持的语法转化为它能支持的形式。



## 安装依赖

```
npm i @babel/core @babel/preset-env @babel/preset-react @babel/plugin-transform-runtime -D

npm i @babel/polyfill core-js regenerator-runtime -S  

npm i react react-dom -S
```

对于@babel/polyfill 的介绍可以参考：

[@babel/polyfill 总结 - SegmentFault 思否](https://segmentfault.com/a/1190000017457575?utm_source=tag-newest)



## 创建babel.config.json

```json
{
    "plugins": [
        [
            "@babel/plugin-transform-runtime",
            {
                "corejs": 3
            }
        ]
    ],
    "presets": [
        [
            "@babel/preset-env",
            {
                "useBuiltIns": "usage",
                "corejs": "3"
            }
        ],
        [
            "@babel/preset-react"
        ]
    ]
}
```

