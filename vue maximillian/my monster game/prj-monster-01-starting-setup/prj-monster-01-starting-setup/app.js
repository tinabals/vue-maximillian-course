function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min)

}

const app = Vue.createApp({
    data(){
        return{
            playerHealth:100,
            monsterHealth : 100,
            count : 0
        }
        
    },
    computed: {
        monsterBarStyles(){
            return {width : this.monsterHealth + '%' }
        },
        playerBarStyles(){
            return {width : this.playerHealth + '%' }
        }
    },
    methods: {
           attackMonster(){
            this.count++
            const attackValue = getRandomNumber(3,9)
            this.monsterHealth -= attackValue
            this.attackPlayer()
           },
           attackPlayer(){
            const attackValue = getRandomNumber(7,15)
            this.playerHealth -= attackValue
           },
           healPlayer(){
            this.count++
            const healValue = getRandomNumber(10,30)
            this.playerHealth += healValue
           },
           

    },
    watch: {
       
    }
    
})

app.mount('#game')