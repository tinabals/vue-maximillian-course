<template>
  <h2>Manage Goals</h2>
  <input type="text" ref="goal"/>
  <button @click="setGoal"> Set goal</button>
  <error-alert v-if="inputIsInvalid">
      <h2> Input is Invalid</h2>
      <p>Please Enter  a few characters</p>
      <button @click="confirmError"> Okay </button>
  </error-alert>
  
</template>

<script>
import ErrorAlert from './ErrorAlert.vue'
export default {
    components: {ErrorAlert},
    data(){
        return{
             inputIsInvalid : false
        }
    },
    methods: {
        setGoal(){
          const enteredValue = this.$refs.goal.value
          if(enteredValue === ''){
              this.inputIsInvalid = true
          }
        },
        confirmError(){
            this.inputIsInvalid = false
        }
    }

}
</script>

<style>

</style>