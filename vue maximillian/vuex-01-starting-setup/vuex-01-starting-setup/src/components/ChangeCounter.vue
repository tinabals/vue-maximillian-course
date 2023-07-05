<template>
  <button @click="inc"> Add 6</button>
  <button @click="increase(payload)"> Add 30</button>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data(){
    return {
      payload : {
      value : 10
      }
    }
  },
   methods : {

    // ...mapActions('increment')
    ...mapActions('numbers',{
      inc : 'increment',
      increase : 'increase'
    })
   
   }
}
</script>

<style>

</style>