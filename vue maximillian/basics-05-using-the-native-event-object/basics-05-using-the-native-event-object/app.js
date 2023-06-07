const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      // fullName : '',
      lastName : '',
    };
  },
  computed : {
    //calculate dynamically
    //reevaluated if the data they depend on changes changes
    //name your computed properties just as you would name your data properties. it only changes when just that particular element changes.
    fullName(){
      if(this.name === '' || this.lastName === ''){
        console.log('running again')
        return ''
      }
      return this.name + ' ' + this.lastName
    }
  },
  methods: {
    //for event binding
    // it is excecuted for every rerender cycle of the component
    setName(event, lastName) {
      this.name = event.target.value ;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name = ''
    },
    outputFullname(){
      // this method is not Ideal. it excutes the method everytime.whenever anything on the screen changes; it s not the soultion of outputing dynamic calculated value
    //   if(this.name === ''){
    //     console.log('running again')
    //     return ''
    //   }
    //   return this.name + ' ' + 'Balogun'
    // },
  },
 
  },
  watch: {
    //you can use data properties as the same variablee name..no clashes
   //  it accepts the value of the property
   //  name(value){
   //   if (value === ''){
   //     this.fullName = ''
   //   } else{
   //   this.fullName = value + ' ' + this.lastName
   //   }
   //  },
   //  lastName(value){
   //   if(value === ''){
   //      this.fullName = '';
   //   } else {
   //    this.fullName = this.name + ' ' + value
   //   }

   //   }
    ///excute change when something happens
    //not directly  used in the template
    //for lowkey runs and non data update
   counter(value){
     if(value > 50){
      const that = this
       setTimeout(function(){
        that.counter = 0
       },2000)
       console.log(this.counter)
     }
   }
   }
   //http request.... ot to set a timer
  
 
});

app.mount('#events');
