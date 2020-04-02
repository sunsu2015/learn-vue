import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'

Vue.use(Router)
function func({query, params}) {
  return {
    id: params.id,
    param1: params.param1,
    foo: query.foo
  }
}

const route =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      // beforeEnter(to, from, next) {
      //   window.console.log(to, from);
      //   next();
      // },
      children: [
        {
          path: 'about/:param1',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
          path: 'about2/:foo',
          name: 'about2',
          props: true,
          component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
          path: 'about1/',
          name: 'about1',
          props: {foo: 'bar'},
          component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
          path: 'test/:id/:param1',
          name: 'test',
          props: func,
          component: () => import(/* webpackChunkName: "about" */ './views/Test.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
});

// route.beforeEach((to, from, next) => {
//   window.console.log(to, from);
//   next();
// })
export default route;
