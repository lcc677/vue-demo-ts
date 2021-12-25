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

除此之外还有一种方式，使用vue的vue-class-component装饰器包来使用。

这两种方式我们都实验一下吧。那我们创建两个组件，UserInfo和Todo来

Todo是用vue.extend来实现的.
```vue
<template>
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item.msg }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name:'Todo',
  data(){
    return {
      items:[
        {id:1,msg:'吃饭'},
        {id:2,msg:'睡觉'},
        {id:3,msg:'打豆豆'}
      ]
    }
  }
})
</script>
```

userInfo是用vue-class-component来实现的

```vue
<template>
  <div>
    <p>用户名称:{{ userName }}</p>
    <p>用户年龄:{{ userInfo.age }}</p>
    <p>用户编号:{{ userInfo.id }}</p>
    <p>用户全名:{{ fullName }}</p>
    <button @click="onClick">
      点击
    </button>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

const UserInfoProps = Vue.extend({
  props:{
    userName:{
      type:String,
      default:''
    }
  }
})

// @Component 修饰符注明了此类为一个 Vue 组件,可以添加参数
// 参数包括
@Component
export default class UserInfo extends UserInfoProps {
  // 初始数据可以直接声明为实例的 property
  userInfo = {
    age:12,
    id:'N006'
  }
   get fullName(){
     return this.userName + '全名'
   }

  // 组件方法也可以直接声明为实例的方法
  onClick (): void {
    window.alert(this.fullName)
  }
}
</script>
```

通过userInfo组件可以看出来,

1. 我们定义data数据在类中直接写就可以,是类的一个属性.
2. 我们定义方法的时候,也是直接写,是类的实例方法.
3. 我们定义computed,要在computed属性前面加get/set,
4. 我们使用vuex中的提供的mapGeters,mapActions等,需要在@Component装饰器的options中使用,computed/methods
5. 我们接受父组件传值的时候,我们必须先定义一个扩展自vue的类,并用我们组件继承自这个扩展类而非是vue.
6. 当我们在@Component参数中要使用我们组件中定义的方法时候,在typescript中会提示我们this没有对应的方法,因为我们this是基本的vue类,所以我们要使用typescript的类型断言,将我们的Component定义成Post类型

```vue
@Component<Post>({
  watch: {
    postId(id: string) {
      // To fetch post data when the id is changed.
      this.fetchPost(id) // -> Property 'fetchPost' does not exist on type 'Vue'.
    }
  }
})
class Post extends Vue {
  postId: string

  fetchPost(postId: string): Promise<void> {
    // ...
  }
}
```



