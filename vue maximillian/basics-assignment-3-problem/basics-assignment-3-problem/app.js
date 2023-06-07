const app = Vue.createApp({
    data(){
        return{
          counter : 0
        }
    },
    computed: {
        result(){
            if(this.counter === 0){
                return  ''
            }
            else if(this.counter < 37){
                return  'Not there yet'
             } else {
                 return  'Too much'
             }
        }
    },
    methods: {
        destinationChecker(val){
             this.counter += val
           
        }
    },
    watch: {
        result(){
            console.log('excecuting')
                const that = this;
                setTimeout(function(){
                    that.counter = 0
                },5000)
            
        }
    }
})

app.mount('#assignment')