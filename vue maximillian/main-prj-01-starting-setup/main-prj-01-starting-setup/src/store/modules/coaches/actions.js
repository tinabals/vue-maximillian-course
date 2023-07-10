export default {
    registerCoach(context, data){
        const coach = {
            id : context.rootGetters.userId,
            firstName : data.first,
            lastName : data.last,
            description : data.desc,
            areas : data.areas,
            hourlyRate : data.rate
        }
        context.commit('registerCoach', coach)
    }
}