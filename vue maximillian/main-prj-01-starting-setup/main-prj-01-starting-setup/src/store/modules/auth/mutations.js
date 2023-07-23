export default{
    setUser(state,payload){
        state.token = payload.token,
        state.UserId = payload.UserId
        state.tokenExpiration = payload.tokenExpiration
    }
    
}