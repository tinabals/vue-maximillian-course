import {createStore} from 'vuex'
import productsModule from './modules/products'
import cartsModule from './modules/carts'


const store = createStore({
    modules : {
        prods : productsModule,
        carts : cartsModule
    },
    state(){
        return {
            isLoggedIn : false
        }
    },
    mutations : {
        login(state) {
            state.isLoggedIn = true;
          },
          logout(state) {
            state.isLoggedIn = false;
          },
    },
    actions : {
        login(context){
            context.commit('login')
        },
        logout(context){
            context.commit('logout')
        }
    },
    getters : {
        isAuth(state){
           return state.isLoggedIn
        } 
    }


})


export default store