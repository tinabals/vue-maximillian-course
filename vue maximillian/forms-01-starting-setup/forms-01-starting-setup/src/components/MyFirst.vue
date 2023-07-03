<template>
 <base-card>
 <template #header>
  <div>
    <h3> This is the header</h3>
  </div>
 </template>
 <template #buttons>
  <div>
    <button @click="clickMe"> click Me</button>
    <button> click Me</button>
    <button> click Me</button>
  </div>
 </template>
 
 </base-card>
</template>

<script>
import BaseCard from '../UI/BaseCard.vue';
export default {
  components: {
    BaseCard
  },
  methods : {
    clickMe(){
      alert('hello')
    }
  }

}
</script>

<style>

</style>