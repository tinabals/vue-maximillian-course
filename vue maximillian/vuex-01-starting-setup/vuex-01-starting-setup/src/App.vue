<template>
  <base-container title="Vuex" v-if="isAuth">
   <the-counter></the-counter>
   <final-value></final-value>
  <button @click="addOne">
    Add 10
  </button>
  <change-counter></change-counter>
  </base-container>
  <base-container>
  <user-auth title="auth"></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter'
import ChangeCounter from './components/ChangeCounter';
import FinalValue from './components/FinalValue'
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FinalValue,
    UserAuth
  },
  computed : {
    isAuth(){
            return this.$store.getters.userIsAuthenticated
          }
  }, 
 
  methods:{
    addOne(){
    //  const payload = {
    //     value : 10
    //   }
      // this.$store.commit('increase', payload)
      this.$store.dispatch({
        type: 'numbers/increase',
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