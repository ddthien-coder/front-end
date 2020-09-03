import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/client/Home.vue'
import i18n from '@/i18n'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: `/${i18n.locale}`
    },
    {
      path: '/:lang',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: 'about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '@/views/client/About.vue')
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import(/* webpackChunkName: "contact" */ '@/views/client/Contact.vue')
        },
        {
          path: 'product',
          name: 'product',
          component: () => import(/* webpackChunkName: "contact" */ '@/views/client/Products.vue')
        },
        {
          path: 'blog',
          name: 'blog',
          component: () => import(/* webpackChunkName: "contact" */ '@/views/client/Blog.vue')
        },
        {
          path: 'service',
          name: 'service',
          component: () => import(/* webpackChunkName: "contact" */ '@/views/client/Services.vue')
        }
      ]
    }
  ]
})
