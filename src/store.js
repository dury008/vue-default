import {createStore} from 'vuex'
import persistedstate from 'vuex-persistedstate'
const store = createStore({
    state() {
        return {
            count: 0,
            cart: [
                {product_id:1, product_name: '아이폰거치대'},
                {product_id:2, product_name: '블루투스마우스'}
            ],
            user:{},
        }
    },
    mutations: {
        increment(state){
            state.count = state.count + 1;
            },
        user(state, data){
            state.user = data;
        },

    },
    plugins: [
        persistedstate({paths:['user']})
    ],
    getters: {
        cartCount: (state) => {
            return state.cart.length;
        },
        productACount: (state) => {
            return state.cart.filter(p=> p.product_name == '아이폰거치대').length;
        }
    }
})

export default store;