<template>

    <li> {{ friend.name }}</li>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }}  Details</button>
    <ul v-if="detailsAreVisible">
        <li>
            <strong>Phone : {{ friend.phone }}</strong>
        </li>
        <li>
            <strong>Email : {{ friend.email }}</strong>
        </li>
    </ul>
    
</template> 

<script>
export default {
    data(){
        return {
            detailsAreVisible : false,
            friend : {
                
                    id : 'manuel',
                    name : 'Manuel Lorenz',
                    phone : '012 345 6798',
                    email : 'manuel@localhost.com'
                
            }
        }
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible
        }
    }
}
</script>