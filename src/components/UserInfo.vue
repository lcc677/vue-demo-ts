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