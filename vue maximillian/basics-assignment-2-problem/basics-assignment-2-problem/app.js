const app = Vue.createApp({
    data(){
        return{
            alertingText : 'You just clicked a button',
            firstOutput : '',
            secondOutput: ''
        }
    },
    methods: {
        clickAlert(){
            alert(this.alertingText)
        },
        showInput(event){
           return this.firstOutput = event.target.value
          },
        showInput2(event){
            return this.secondOutput = event.target.value
          }

       
    }

})


app.mount('#assignment')