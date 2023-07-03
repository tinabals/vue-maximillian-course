<template>
    <form @submit.prevent="submitData">
        <div>
            <label for="Name">Name</label>
            <input type="text" v-model="name" />
        </div>
        <div>
            <label for="Name">Age</label>
            <input type="text" v-model="age">
        </div>
        <button> Add user </button>
        
    </form>
    
</template>

<script>
export default {
    emits: ['add-contact'],
    data(){
        return{
            name: '',
            age: '',
        }

    },

    methods :{
        submitData(){
           this.$emit('add-contact', this.name, this.age)
        this.clearInputField()
        },
        clearInputField(){
            this.name = ''
            this.age = ''

        }

    }
 
}
</script>
    
<style scoped>
form div {
  margin-bottom: 10px;
}

form label {
    display: block;
    font-size: 18px;
  }
  
  form input[type='text'] {
    padding: 5px;
    font-size: 16px;
  }
  
  form button {
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  </style>