import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false

let store = new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        doElse (state) {
            return state.count * 10
        }
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})

/* eslint-disable no-unused-vars  */
let app = new Vue({
    el: '#app',
    store,
    template: '<App/>',
    components: { App }
})
