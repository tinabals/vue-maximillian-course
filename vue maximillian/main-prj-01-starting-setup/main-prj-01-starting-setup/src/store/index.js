import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js'
import requestModule from './modules/reequests/index.js'
import authModule from './modules/auth/index.js'

const store = createStore({
    namespaced : true,
    modules : {
        coaches : coachesModule,
        requests : requestModule,
        auth : authModule

        
    },
  
  
})


export default store