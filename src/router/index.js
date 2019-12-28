import Vue from 'vue'
import VueRouter from 'vue-router'
import DirectoryOfPersons from '../views/DirectoryOfPersons.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'DirectoryOfPersons',
        component: DirectoryOfPersons,

    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router