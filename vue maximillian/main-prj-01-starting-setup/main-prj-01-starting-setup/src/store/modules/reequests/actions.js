export default{
    submitRequests(context, payload){
        const newRequests = {
            id : new Date().toISOString(),
            coachId : payload.coachId,
            userEmail : payload.email,
            message : payload.message
        }
        context.commit('submitRequests', newRequests)
    }
}