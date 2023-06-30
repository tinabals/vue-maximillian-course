<template>
    <div class="active-user"> 
        
        <h1>Name : {{ name }}</h1>
        <button @click="toggleAge">{{ showUserInfo ? 'Hide Age' : 'Show Age' }}</button>
        <p>Age : <span >{{ showUserInfo ? age : 'Not available'}}</span></p>
        <button @click="addContact"> Delete Friend</button>
    </div>
    
</template>

<script>
export default {
    emits :['delete'],
    props :{
        id : {
            type  : String,
            required : true
        },
        name: {
            type: String,
            required : true
        },
        age : {
            type: Number,
            required : true
        }
    },
    data(){
        return{
            showUserInfo : false
        }
    },
    methods : {
        addContact(){
            this.$emit('delete', this.id)
        },
        toggleAge(){
            this.showUserInfo = !this.showUserInfo
        }
    }

}
</script>
<style scoped>
.active-user {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

.active-user h1 {
  font-size: 24px;
  margin-bottom: 5px;
}
.active-user button {
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

.active-user .user-age {
  font-size: 18px;
  margin-top: 10px;
}
</style>