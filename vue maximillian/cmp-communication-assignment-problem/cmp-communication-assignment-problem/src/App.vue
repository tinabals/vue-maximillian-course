<template>
    <div>
        <user-data 
        @add-contact = "addContact"
        
        
        ></user-data>
        <h1>{{ users.length ? 'Active Users' : 'No User Avsilable'}}</h1>
        <active-user v-for="user in users"
        :key = "user.id"
        :id="user.id"
        :name="user.name"
        :age="user.age"
        @delete ="deleteContact"
        ></active-user>
    </div>
</template>
<script>
export default {
    data(){
        return{
            users : [
            { 
                id : 'dami',
                name : 'Damilola',
                age: 10
            },
            {
                id:'toyo',
                name : 'Toyosi',
                age : 17
            },
            {
                id: 'fiso',
                name: 'Fisayo',
                age : 22
            }
                   ]
        }
    },
    methods:{
        addContact(name, age){
            const newUser = {
             id : new Date().toISOString(),
             name : name,
             age : age
            }
            this.users.push(newUser)
            },
            deleteContact(userId){
                  console.log(userId)
                this.users = this.users.filter(user => user.id !== userId)
            }
    }
    
}
</script>
