const app = Vue.createApp({
    data(){
        return{
            fullName : 'Damilola Balogun',
            age: 26,
            imageURL : 'https://media.istockphoto.com/id/1181710268/photo/naruto-bridge-in-tokushima.jpg?s=612x612&w=0&k=20&c=viPn5RgAbMrdlclSJYn-ZR_ywPh3LpI-XDay8B8TQFY='
        }   
    }, 
    methods : {
        calcAgeIn5Years(){
              this.age  + 5
        },
        randomNumberDisplay(){
            const randomNumber = Math.random();
            return (randomNumber * 1) 
        }
    }
})

app.mount('#assignment')