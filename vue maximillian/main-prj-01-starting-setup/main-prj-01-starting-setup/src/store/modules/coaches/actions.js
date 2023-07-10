export default {
   async registerCoach(context, data){
        const userId = context.rootGetters.userId
        const coach = {
            firstName : data.first,
            lastName : data.last,
            description : data.desc,
            areas : data.areas,
            hourlyRate : data.rate
        }
      const response = await fetch(`https://http-proj-91e04-default-rtdb.firebaseio.com/coaches/${userId}.json`, {
            method : 'PUT', //this updates an id or creates...post just creates everytime tho it exists or not
            body : JSON.stringify(coach)
        })
        // const responseData = await response.json()
        if(!response.ok){
            //error
        }
        context.commit('registerCoach', {
            id : userId,
            ...coach
        })
    }
}