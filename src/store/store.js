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
        setCart (state, payload) {
          state.itemsInCart = payload;
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
            fetch(`/products/${page}`)
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
        requestCartData ({ commit }) {
            fetch(`/cart`)
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    commit('setCart', res.cart);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        addToCart ( { commit, dispatch }, id) {
            commit('addItemToCart', id);
            dispatch('saveCartToServer');
        },
        removeFromCart ( { commit, dispatch }, id) {
            commit('removeItemFromCart', id);
            dispatch('saveCartToServer');
        },
        reduceInCart ( { commit, dispatch }, id) {
            commit('reduceItemCountInCart', id);
            dispatch('saveCartToServer');
        },
        addProductToCatalog ( {}, data) {
            fetch('/products/', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    console.log(res);
                })
        },
        saveCartToServer ( {getters} ) {
            fetch('/cart', {
                method: 'POST',
                body: JSON.stringify(getters.getCartData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    console.log('Cart saved', res);
                })
                .catch(err => {
                    console.log('Cart NOT saved' + err);
                })
        }
    }
})
