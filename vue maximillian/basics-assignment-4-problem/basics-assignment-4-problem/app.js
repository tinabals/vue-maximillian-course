const app = Vue.createApp({
    data(){
        return{
          classes : '',
          paragraphClass : false
        }
    },
    computed: {
        paragraphClass(){
            return {}
        }
    }
   
})

app.mount('#assignment')