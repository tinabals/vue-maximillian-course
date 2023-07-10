import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js'
import requestModule from './modules/reequests/index.js'

const store = createStore({
    namespaced : true,
    modules : {
        coaches : coachesModule,
        requests : requestModule

        
    },
    state(){
         return{
            userId : 'c3'
         }
    },
    getters : {
        userId(state){
            return state.userId
        }
    }
})


export default store