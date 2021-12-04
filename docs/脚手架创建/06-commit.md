# 规范git commit提交

网上资料数不胜数。比如：

 [用 husky 和 lint-staged 构建超溜的代码检查工作流 - SegmentFault 思否](https://segmentfault.com/a/1190000009546913)



## 安装依赖 -D

- @commitlint/cli
- @commitlint/config-conventional
- husky
- lint-staged



## 创建commitlint.config.js

```js
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'body-leading-blank': [2, 'always'],
        'header-max-length': [2, 'always', 72],
        'subject-full-stop': [2, 'never', '.'],
        'type-empty': [2, 'never'],
        'type-enum': [
            2,
            'always',
            [
                'feat', // 新特性，新需求
                'bug', // 此项特别针对bug号，用于向测试反馈bug列表的bug修改情况
                'feature', // 新功能（feature）
                'fix', // 修补bug
                'docs', // 文档（documentation）
                'style', // 格式（不影响代码运行的变动）
                'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
                'test', // 增加测试
                'chore', // 构建过程或辅助工具的变动
                'revert', // feat(pencil): add ‘graphiteWidth’ option (撤销之前的commit)
                'merge' // 合并分支， 例如： merge（前端页面）： feature-xxxx修改线程地址
            ]
        ]
    }
}
```

