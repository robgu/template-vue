# vue1-webpack

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

# Constructor
```
/src
  /components               全局 components
  /plugins                  封装和业务无关通用的代码
  /pages
    /index.vue              页面入口文件
    /state.js               vuex 文件,和 page 一一对应
```

# Dependencies
## 打包工具
- https://github.com/webpack/webpack/tree/v1.12.14

## 路由
- https://github.com/vuejs/vue-router/tree/v0.7.11/docs

## 网络访问
- https://github.com/pagekit/vue-resource/tree/0.7.0
