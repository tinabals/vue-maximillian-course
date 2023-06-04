
const app = Vue.createApp({
    data(){
        return {
            courseGoalA : 'Finish the course and Learn Vue here',
            courseGoalB : '<h2>Master Js First</h2>',
            VueLink : 'https://www/facebook.com'
        }
    }, 
    methods : {
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.courseGoalA
            } else{
                return this.courseGoalB
            }
        }
    }

})


app.mount('#user-goal')