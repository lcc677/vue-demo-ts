<template>
  <div>
    <span>hello {{name}}</span>
    <button @click="handle">按钮</button>
  </div>
</template>
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