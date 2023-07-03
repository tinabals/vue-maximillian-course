<template>
  <div class="base-card">

    <div class="header">
    <slot name="header">{{ title }}</slot>
  </div>
  <div>
    <slot name="buttons"></slot>
  </div>
  <div>This is my first slot</div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            title : 'BaseCard'
        }
    }

}
</script>

<style scoped>
.base-card {
    padding: 2em;
    color: red;
    background: yellow;
}

</style>