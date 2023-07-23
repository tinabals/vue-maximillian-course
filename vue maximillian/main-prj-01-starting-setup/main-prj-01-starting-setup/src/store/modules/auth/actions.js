export default{
    async login(context,payload){
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCEo16tkNXlD3abFTfSWHyfYyzTNJ4hRKM',
        
        {
            method : 'POST',
            body : JSON.stringify({
                email : payload.email,
                password : payload.password,
                returnSecureToken : true
            })
        })
        const responseData = await response.json()

        if(!response.ok){
            const error = new Error(responseData.message || 'Failed to Login')
            throw error
        }
        context.commit('setUser', {
            token : responseData.idToken,
            userId : responseData.localId,
            tokenExpiration : responseData.expiresIn
        })
    },


    async signup(context, payload){
     const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCEo16tkNXlD3abFTfSWHyfYyzTNJ4hRKM', {
            method : 'POST',
            body : JSON.stringify({
                email : payload.email,
                password : payload.password,
                returnSecureToken : true
            })

        })
        const responseData = await response.json()
     
        if(!response.ok){
            const error = new Error(responseData.message || 'Failed to Authenticate')
            throw error;
        }
        console.log(responseData)
        context.commit('setUser', {
            token : responseData.idToken,
            userId : responseData.localId,
            tokenExpiration : responseData.expiresIn
        } )

    }
}