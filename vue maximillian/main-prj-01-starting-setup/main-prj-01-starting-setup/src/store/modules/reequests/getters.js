export default{
    requests(state,_, _2, rootGetters){
        const coachId = rootGetters.userId
        // console.log(state.requests)
        return state.requests.filter(request =>request.coachId === coachId)
    },
    hasRequests(_, getters){
        // console.log(getters)
        return getters.requests && getters.requests.length > 0 
    },
    shouldUpdate(state){
        const lastFetch = state.lastFetch
        if(!lastFetch){
            return true
        }
        const currentTimeStamp = new Date().getTime()
        return (currentTimeStamp - lastFetch)/ 1000 > 60
    }
}