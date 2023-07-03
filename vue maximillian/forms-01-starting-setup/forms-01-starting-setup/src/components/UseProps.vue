<template >
    
    <div>
        hi
        <div v-for="user in users" :key="user.age" >

<h1>{{ user.name }}</h1>
<p>{{ user.age }}</p>
<p>{{ user.sex }}</p>
</div>
    </div>
</template>

<script>
export default {
    props : ['users']

}
</script>

<style>

</style>