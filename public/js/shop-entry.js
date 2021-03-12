import Vue from 'vue';
import App from "../../src/App.vue";

import store from '../../src/store/store.js';

new Vue({
    el: '.shop',
    template: '<App />',
    components: {
        App
    },
    store
});

