const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name : '',
      confirmedName: ''
    };
  },
  methods: {
    add(num){
      return this.counter  +=  num
    },
    remove(num){
      return this.counter -= num
    },
    //you can use this but just use event prevent modifier in html
    // submitForm(event){
    //   event.preventDefault()
    //   alert('submitting here')
    // },
     submitForm(){
      alert('submitting here')
    },
    confirmInput(){
      this.confirmedName = this.name
    },
    setName(event,lastName){
      event.preventDefault();
      this.name = event.target.value + ' ' + lastName
      console.log(this.name)
    }
  }
});

app.mount('#events');
