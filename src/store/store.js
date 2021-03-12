import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        data: [],
        itemsInCart: []    // Массив объектов вида { 'id': 'xxx', 'count': XXX }
    },
    mutations: {
        setData (state, payload) {
            state.data = state.data.concat(payload);
        },
        addItemToCart (state, id) {
            const existItem = state.itemsInCart.find(item => item.id === id)
            if (existItem) {
                existItem.count++
            } else {
                state.itemsInCart.push({
                    "id": id,
                    "count": 1
                })
            }
        },
        removeItemFromCart (state, id) {
            const removeIndex = state.itemsInCart.map(item => item.id).indexOf(id);
            state.itemsInCart.splice(removeIndex, 1)
        },
        reduceItemCountInCart (state, id) {
            const existItem = state.itemsInCart.find(item => item.id === id);
            existItem.count--;
            if (existItem.count === 0) {
                const removeIndex = state.itemsInCart.map(item => item.id).indexOf(id);
                state.itemsInCart.splice(removeIndex, 1)
            }
        }
    },
    getters: {
        getData: state => state.data,
        getProduct: state => id => {
            return state.data.find(product => product.id === id);
        },
        getCartData: state => state.itemsInCart
    },
    actions: {
        requestData ({ commit }, page) {
            fetch(`/db/data${page}.json`)
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    commit('setData', res.data);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        addToCart ( { commit }, id) {
            commit('addItemToCart', id);
        },
        removeFromCart ( { commit }, id) {
            commit('removeItemFromCart', id);
        },
        reduceInCart ( { commit }, id) {
            commit('reduceItemCountInCart', id);
        }
    }
})
