<template>
  <use-props :users="user"></use-props>
  <the-form></the-form>
</template>

<script>
import TheForm from './components/TheForm.vue';
import UseProps from './components/UseProps.vue';

export default {
  components: {
    TheForm,
    UseProps
  },
  data(){
    return{
      
      user: {
      name : 'dami',
      age : 19,
      sex : 'female'
    }
    }
  }
}
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
  background-color: #292929;
}
</style>