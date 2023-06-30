<template>

    <li> {{name }} {{ isFavorite  ? '(Favourite)' : '' }}</li>
    <button @click="toggleFavorite">toggle favorite</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }}</button>
    
    <ul v-if="detailsAreVisible">
        <li>
            <strong>Phone : {{ phoneNumber }}</strong>
        </li>
        <li>
            <strong>Email : {{ emailAddress }}</strong>
        </li>
    </ul>
    <button @click="$emit('delete', id)"> Delete Friend</button>
    
</template> 

<script>
export default {
    // emits: {
    //     'toggle-favorite' : function(id){
    //         if(id){
    //             return true
    //         } else{
    //             console.warn('id is missing')
    //             return false
    //         }
    //     }, 

    // },
    //or //
    emits : ['toggle-favorite','delete'],


    //props//
    // props: [
    //     'name',
    //     'phoneNumber',
    //     'emailAddress',
    //     'isFavorite'
    // ],
    props : {
        id : {
            type  : String,
            required : true
        },
        name : {
            type  : String,
            required : true
        },
        phoneNumber : {
            type  : String,
            required : true
        },
        emailAddress: {
            type  : String,
            required : true
        },
        isFavorite: {
            type  : String,
            required : false,
            default : '0',
            validator : function(value){
                return value === '1' || value === '0'
            }
        }
    },
    data(){
        return {
            detailsAreVisible : false,
            // friendIsFsvorite : this.isFavorite
        }
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible
        },
        toggleFavorite(){
            // console.log(this.friendIsFsvorite)
            // console.log(this.isFavorite, 'isfac')
            // if(this.friendIsFsvorite === '1'){
            //     this.friendIsFsvorite = '0'
            // } else{
            //     this.friendIsFsvorite = '1'
            // }
            //  this.friendIsFsvorite = ! this.friendIsFsvorite
            this.$emit('toggle-favorite', this.id )
        },
        // deleteFriend(){
        //     this.$emit('delete')
        // }
    },
    mounted(){
        console.log(this.phoneNumber, this.isFavorite)
    }
}
</script>