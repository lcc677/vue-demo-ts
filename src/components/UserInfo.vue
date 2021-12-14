<template>
  <div>
    <p>用户名称:{{ userName }}</p>
    <p>用户年龄:{{ userInfo.age }}</p>
    <p>用户编号:{{ userInfo.id }}</p>
    <p>用户全名:{{ fullName }}</p>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

// @Component 修饰符注明了此类为一个 Vue 组件
@Component({
  // 所有的组件选项都可以放在这里
  template: '<button @click="onClick">Click!</button>'
})
export default class UserInfo extends Vue {
  // 初始数据可以直接声明为实例的 property
  message: string = 'Hello!'

  // 组件方法也可以直接声明为实例的方法
  onClick (): void {
    window.alert(this.message)
  }
}
</script>