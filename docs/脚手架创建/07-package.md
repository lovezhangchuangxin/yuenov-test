package中内容如下：

```json
{
  "name": "react",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --entry ./src/index.tsx --output-path ./build"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.16.0",
    "@babel/plugin-transform-runtime": "^7.16.4",
    "@babel/preset-env": "^7.16.4",
    "@babel/preset-react": "^7.16.0",
    "@commitlint/cli": "^11.0.0",
    "@commitlint/config-conventional": "^13.2.0",
    "@types/react": "^17.0.37",
    "@types/react-dom": "^17.0.11",
    "@typescript-eslint/eslint-plugin": "^5.5.0",
    "@typescript-eslint/parser": "^5.5.0",
    "babel-loader": "^8.2.3",
    "clean-webpack-plugin": "^4.0.0",
    "css-loader": "^6.5.1",
    "eslint": "^7.32.0",
    "eslint-plugin-react": "^7.27.1",
    "html-webpack-plugin": "^5.5.0",
    "husky": "^4.3.6",
    "less": "^4.1.2",
    "less-loader": "^10.2.0",
    "lint-staged": "^10.5.3",
    "postcss-loader": "^6.2.1",
    "postcss-preset-env": "^7.0.1",
    "style-loader": "^3.3.1",
    "ts-loader": "^9.2.6",
    "typescript": "^4.5.2",
    "webpack": "^5.64.4",
    "webpack-cli": "^4.9.1"
  },
  "dependencies": {
    "@babel/polyfill": "^7.12.1",
    "core-js": "^3.19.2",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "regenerator-runtime": "^0.13.9"
  },
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}

```

