# vue 项目

## 1. 初始化pacage.json文件

```shell
npm init -y
```

## 2. 安装@vue/cli-service 包
```shell
npm install --save-dev @vue/cli-service
```

项目可以执行vue-cli-service命令

## 3. 添加 vue 包
```shell
npm install vue
```

## 4. 安装 vue-template-compiler 包
```shell
npm install --save-dev vue-template-compiler
```
(vue-template-compiler 学习)
我们的cli-service中用到了这个包，虽然cli-service中依赖了这个包，但是在我们使用的时候没有安装进来，新发现cli-service的package.js中有peerDependenciesMeta和peerDependencies这两个选项。具体原因看笔记的npm/package.json属性

## 5. 添加脚本

```json
script:{
    "dev": "vue-cli-service serve",
    "build:prod":"vue-cli-service build",
    "build:stag":"vue-cli-service build --mode staging"
}
```

## 6. 添加`.env.developement`,`.env.staging`,`.env.producting`三个环境变量文件

环境变量里面必须是以VUE_APP开头的变量名


## 7. 创建 src 文件及其子文件夹
   - api :用于存放所有请求
   - assets
   - components
   - router
   - store
   - views
   - utils
   - static
   - App.vue
   - main.js
## 8. 添加代码
src/main.js

vue-cli-service生成的webpack配置的入口文件就是这个,所以我们要这样写,当然你可以修改这个,

```js
import Vue from "vue";
import App from "./App";
new Vue({}).$mount("#app");
```
App.vue
```html
<template>
  <span>hello vue</span>
</template>
```

这就是一个基本的框架，package.json，src/main.js,src/App.vue，依赖包有两个 @vue/cli-service和vue-template-compiler这两个包。

我们看到，我们new的vue挂载到了#app这个节点上了。那我们这个#app的节点在哪里呢？
我们通过npx vue-cli-service inspect 查看webpack的配置文件

我们发现HtmlPlugins的插件的配置
```js
new HtmlWebpackPlugin(
  {
    title: 'vue-demo-js',
    templateParameters: function () { /* omitted long function */ },
    template: '/vue-demo-js/node_modules/@vue/cli-service/lib/config/index-default.html'
  }
),
````
很明显，我们的基础html在cli-service/lib/config/index-default.html.如果我们没有配置，就是使用的默认的这个html。

如果我们想自定义的html，那我们在根目录下创建一个public/index.html的文件。这就变成了基础的html，这个是固定的，必须得是public/index.html.

如果你想真正的自定义，需要再vue.config.js中修改html-webpack-plugins的配置
```js
// vue.config.js
module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].template = '/Users/username/proj/app/templates/index.html'
        return args
      })
  }
}
```
这些问题可以在目录 cli-service/lib/config/app.js 第151行找到答案

## 9. 添加 eslint 格式校验

```shell
npm install -D eslint
// 初始化.eslintrc文件
eslint --init 
// 一个交互命令，我们选择框架是vue后，会提示我们安装eslint-plugin-vue这个插件
```
