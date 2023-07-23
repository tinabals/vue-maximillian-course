export default{
     async submitRequests(context, payload){
        const newRequests = {
            userEmail : payload.email,
            message : payload.message
        }
       
      const response = await fetch(`https://http-proj-91e04-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
             {
                method : 'POST',
                body : JSON.stringify(newRequests)
             }
        )
        const responseData = await response.json()

        if(!response.ok){
            const error = new Error(responseData.message || 'Failed To Send requests')
            throw error
        }
        newRequests.id - responseData.name
        newRequests.coachId = payload.coachId
        context.commit('submitRequests', newRequests)
    },
    async fetchRequests(context){
        const coachId = context.rootGetters.userId
        const token = context.rootGetters.token
        console.log(token)
        const response = await fetch(`https://http-proj-91e04-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=` + token)
        const responseData = await response.json()

        if(!response.ok){
            const error = new Error(responseData.message || 'Failed to Fetch Requests')
            throw error
        }
        const requests = []

        for(const key in responseData){
            const request = {
                id : key,
                coachId : coachId,
                userEmail : responseData[key].userEmail,
                message : responseData[key].message
            }
           requests.push(request)

           
        }
        context.commit('setRequests', requests)
        
    }
}