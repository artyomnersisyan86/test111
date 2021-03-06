import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

// import VueResource from 'vue-resource'

import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';


Vue.use(VueAxios, axios)

// Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')