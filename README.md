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

#### 手动添加eslint

```shell
npm install -D eslint
// 初始化.eslintrc文件
eslint --init 
// 一个交互命令，我们选择框架是vue后，会提示我们安装eslint-plugin-vue这个插件
```
添加完eslint,你可以在eslintrc.js配置文件中添加自己的rules.

#### 使用vue提供的eslint包

先将我们手动安装的eslint和eslint-plugin-vue删除掉,因为这两个包跟我们@vue/eslint插件中的版本不匹配,会导致错误

vue还给我们提供了一个@vue/cli-plugin-eslint的插件,这个插件可以向我们的vue-cli-service服务添加命令.我们看目前项目有的命令:
```shell
npx vue-cli-service help 

   serve     start development server
   build     build for production
   inspect   inspect internal webpack config
```
当我们安装@vue/cli-plugin-eslint插件后,vue-cli-service会出现一个lint的命令,
```shell
vue add @vue/eslint
```
这个命令还会将包@vue/eslint自动解析成 @vue/cli-plugin-eslint,从npm安装这个包,并调用包的生成器.生成器会给我们提供选项,
- 选择ESlint的,不同的选择会安装不同的配置
  - 用第一个 Error prevention only 仅预防错误,
  - 当然你也可以选择airbnb或者Prettier格式的,这两个包就会额外安装对应的配置和对应的核心包(Prettier会安装Prettier包)
- 选择lint运行的时机
  - 如果选择Lint and fix on commit 这个会在我们提交代码的时候,对我们提交的代码进行lint和fix操作,如果fix解决不了,就直接报错,并阻止提交

```shell
vue add @vue/eslint
vue add eslint
vue add @vue/cli-plugin-eslint
# 三条命令都可以的
```

用vue add 插件命令,可以将我们需要的依赖都一次安装上,并生成我们想要的配置文件.eslintrc.js.当i选择一些配置还会产生editConfig文件.他也会修改我们的package.json文件的scripte,添加上他的**vue-cli-service lint** 命令.

## 10. 添加babel 代码转化

添加babel之前,我们看一下,没有添加babel的代码
我们在App.vue添加

```html
<script>
export default {
  data(){
    return {
      name:'vue'
    }
  },
  methods:{
    handle(){
      const set = new Set();
      console.log(set)
    }
  }
}
</script>
```
打包完,我们可以看出来他跟源代码没有什么区别的
![未添加babel](./assets/image0.png)

#### 先用vue插件添加babel

```shell
vue add @vue/babel
```

会在当前目录下生成babel.config.js的文件.用于配置babel,除此之外不用做任何操作,那具体他是在哪里用了babel.

我们大体知道webpack用babel的话,应该是在loader里面,我们先看看没有安装babel时候的webpack的配置,单独看js的

安装后

```js
npx vue-cli-service inspect --rule js

/* config.module.rule('js') */
{
  test: /\.m?jsx?$/,
  exclude: [
    function () { /* omitted long function */ }
  ],
  use: [
    /* config.module.rule('js').use('cache-loader') */
    {
      loader: '/home/cc/web_work/code/vue-demo-js/node_modules/cache-loader/dist/cjs.js',
      options: {
        cacheDirectory: '/home/cc/web_work/code/vue-demo-js/node_modules/.cache/babel-loader',
        cacheIdentifier: '482ef63c'
      }
    },
    /* config.module.rule('js').use('babel-loader') */
    {
      loader: '/home/cc/web_work/code/vue-demo-js/node_modules/babel-loader/lib/index.js'
    }
  ]
}
```





![添加babel后的](./assets/image.png)

