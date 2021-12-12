### vue项目

1. npm init -y

```text
初始化pacage.json文件
```

2. 安装@vue/cli-service包

```text
项目可以执行vue-cli-service命令
```

3. 添加vue包

4. 安装vue-template-compiler包，(vue-template-compiler学习)

   ```tex
   我们的cli-service中用到了这个包，虽然cli-service中依赖了这个包，但是在我们使用的时候没有安装进来，我们发现cli-service的package.js中有peerDependenciesMeta和peerDependencies这两个选项。
   ```

   

5. 添加脚本

```json
script:{
    "dev": "vue-cli-service serve",
    "build:prod":"vue-cli-service build",
    "build:stag":"vue-cli-service build --mode staging"
}
```

4. 添加`.env.developement`,`.env.staging`,`.env.producting`三个环境变量文件

```text
环境变量里面必须是以VUE_APP开头的变量名
```

5. 创建src文件及其子文件夹
   + api :用于存放所有请求
   + assets
   + components
   + router
   + store
   + views
   + utils
   + static
   + App.vue
   + main.js
6. main.js添加内容

```js
import Vue from 'vue'
import App from './App'
new Vue({
  
}).$mount('#app')
```

```html
<template>
	<span>hello vue</span>
</template>
```

```tex
这就是一个基本的框架，package.json，src/main.js,src/App.vue，依赖包有两个 @vue/cli-service和vue-template-compilerz这两个包。
我们看到，我们new的vue挂载到了#app这个节点上了。那我们这个#app的节点在哪里呢？
我们通过npx vue-cli-service inspect 查看webpack的配置文件，我们发现HtmlPlugins的插件的配置
```js
new HtmlWebpackPlugin(
      {
        title: 'vue-demo-js',
        templateParameters: function () { /* omitted long function */ },
        template: '/vue-demo-js/node_modules/@vue/cli-service/lib/config/index-default.html'
      }
    ),
```
```tex
很明显，我们的基础html在cli-service/lib/config/index-default.html.如果我们没有配置，就是使用的默认的这个html。
如果我们想自定义的html，那我们在根目录下创建一个public/index.html的文件。这就变成了基础的html，这个是固定的，必须得是public/index.html.如果你想真正的自定义，需要再vue.config.js中修改html-webpack-plugins的配置
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
目录 cli-service/lib/config/app.js 第151行

```

