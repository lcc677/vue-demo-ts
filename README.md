# vue -ts项目

我们在js项目的基础上，添加typescript的支持

## 11. 配置TypeScript

vue提供一个@vue/vue-plugin-TypeScript的插件.

```shell
vue add @vue/typescript
```

安装完成后,我们的src/main.js 会变成src/main.ts,而且我们的导入vue组件要加上后缀.不加会报错

```tsx
import App from './App'
// 换成
import App from './App.vue'
```



我们的App.vue也会发生变化,<scripte>中是ts样式

```html
<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default Vue.extend({
  name: 'App',
  components: {
    HelloWorld
  }
});
</script>
```

默认导出的是一个继承自Vue的对象.里面写法跟我们写js是一样的

除此之外还有一种方式，使用vue的vue-class-component装饰器包来使用

