const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value
      console.dir(this.$refs.userText.value)
    },
  },
});

app.mount('#app');



const app2 = Vue.createApp({
  template : `  <p>{{secondApp}} </p>`,
  data(){
    return {
      secondApp : 'Data'
    }
  }
})

app2.mount('#app2')



// const data = {
//   message : 'Hello',
//   longMessage : 'Hello! World!'
// }

// const handler = {
//   set(target,key,value){
//     console.log(target)
//     console.log(key)
//     console.log(value)
//     if(key === 'value'){
//       target.longMessage = value + ' World!'
//     }
//   target.message = value
//   }
// }

// const proxy = new Proxy (data,handler )

// proxy.message = 'Hello!!!'