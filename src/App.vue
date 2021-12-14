<template>
  <div>
    <span>hello {{ name }}</span>
    <button @click="handle">
      按钮
    </button>
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
      const newPromise = Promise.resolve();
      [1,2,3].forEach((item)=>{
        console.log(item)
      })
      console.log(newPromise)
      const set = new Set();
      console.log(set)
    }
  }
}
</script>
