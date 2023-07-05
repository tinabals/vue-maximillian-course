import {createStore} from 'vuex'
import productsModule from './modules/products'
import cartsModule from './modules/carts'


const store = createStore({
    modules : {
        prods : productsModule,
        carts : cartsModule
    }

})


export default store