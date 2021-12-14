<template>
  <div>
    <span>hello typescipt vue</span>
    <h1>用户信息</h1>
    <user-info :user-name="userName" />
    <h1>Todo列表</h1>
    <todo />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import UserInfo from './components/UserInfo.vue';
import Todo from './components/Todo.vue'

export default Vue.extend({
  name: 'App',
  components: {
    UserInfo,
    Todo
  },
  data(){
    return {
      userName:'vue'
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
