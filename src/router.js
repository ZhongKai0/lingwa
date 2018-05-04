import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const footer = () => import(/* webpackChunkName: "tabs" */ './components/footer');
const index = () => import(/* webpackChunkName: "tabs" */ './page/index');
const info = () => import(/* webpackChunkName: "tabs" */ './page/info');
const user = () => import(/* webpackChunkName: "tabs" */ './page/user');
const login = () => import(/* webpackChunkName: "user" */ './page/login');

let routes = [{
  path: '*',
  components: {
    node: index,
    footer: footer
  },
}];

let user_r = [
  {
    name: 'login',
    path: 'login',
    component: login,
    children:[
      {
        name: 'login2',
        path: 'login',
        component: login,
      }
    ]
  }
]

let tabs = [{
  name: 'index',
  path: '/index',
  components: {
    node: index,
    footer: footer
  }
}, {
  name: 'info',
  path: '/info',
  components: {
    node: info,
    footer: footer
  }
}, {
  name: 'user',
  path: '/user',
  components: {
    node: user,
    footer: footer
  },
  children: user_r
}]


export default new Router({
  routes: [
    ...routes,
    ...tabs,
  ]
})
