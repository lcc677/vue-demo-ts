<template>
  <div>
    <div v-html="women" />
    <span>hello</span>
  </div>
</template>
<script>
export default ({
  data(){
    return{
      list:[{id:1,name:'z红果'},{id:2,name:'z红果2'}]
    }
  }
})
</script>
