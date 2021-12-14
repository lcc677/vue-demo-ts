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