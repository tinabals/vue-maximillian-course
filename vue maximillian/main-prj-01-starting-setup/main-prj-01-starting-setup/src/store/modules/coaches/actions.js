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
        const token = context.rootGetters.token
        console.log(token,'here')
        const response = await fetch(`https://http-proj-91e04-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=` + token, {
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
    },
  async  loadCoaches(context, payload){
    if(!payload.forceRefresh && !context.getters.shouldUpdate){
        return;
    }
       const response = await fetch(`https://http-proj-91e04-default-rtdb.firebaseio.com/coaches.json`)
       const respomseData =  await response.json()

       if(!response.ok){
        const error = new Error(respomseData.message || 'Failed To Fetch')
        throw error
       }
       const coaches = []
       for(const key in respomseData){
        const coach = {
            firstName : respomseData[key].firstName,
            lastName : respomseData[key].lastName,
            description : respomseData[key].description,
            areas : respomseData[key].areas,
            hourlyRate : respomseData[key].hourlyRate
        }
        coaches.push(coach)
       }
       context.commit('setCoaches', coaches)
       context.commit('setFetchTimeStamp')
    }
}