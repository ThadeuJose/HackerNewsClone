import './master.css'

import Vue from 'vue'

import Icon from 'vue-awesome/components/Icon.vue'

Vue.component('icon', Icon)

import App from './component/App.vue'
import store from './store/main.js'

new Vue({
    el: '#app',
    store,
    render: h => h(App),
    components: { App }
})
