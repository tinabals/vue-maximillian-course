<template>
  <base-container title="Vuex">
   <the-counter></the-counter>
   <final-value></final-value>
  <button @click="addOne">
    Add 10
  </button>
  <change-counter></change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter'
import ChangeCounter from './components/ChangeCounter';
import FinalValue from './components/FinalValue'

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FinalValue
  }, 
 
  methods:{
    addOne(){
    //  const payload = {
    //     value : 10
    //   }
      // this.$store.commit('increase', payload)
      this.$store.dispatch({
        type: 'increase',
         value : 10
      })
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>