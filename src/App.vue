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
      women:'women',
      list:[{id:1,name:'z红果'},{id:2,name:'z红果2'}]
    }
  },
  created(){
    const abc = 'created'
    console.log(abc)
  }
})
</script>
