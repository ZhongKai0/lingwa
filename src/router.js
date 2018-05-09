import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const footer = () => import(/* webpackChunkName: "tabs" */ './components/footer');
const index = () => import(/* webpackChunkName: "tabs" */ './page/index');
const info = () => import(/* webpackChunkName: "tabs" */ './page/info');
const user = () => import(/* webpackChunkName: "tabs" */ './page/user');
const login = () => import(/* webpackChunkName: "user" */ './page/login');
const detail = () => import(/* webpackChunkName: "user" */ './page/detail');
const history = () => import(/* webpackChunkName: "user" */ './page/history');
let routes = [{
  path: '*',
  components: {
    node: index,
    footer: footer
  },
  children:[
    
  ]
}];

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
 
},
  {
    name: 'detail',
    path: '/detail',
    components: {
      node:detail,
      footer: footer
    }
  },
 {
    name: 'history',
    path: '/history',
    components: {
      node: history,
      footer: footer
    },

  }
]


export default new Router({
  routes: [
    ...routes,
    ...tabs,
    {
      name: "login",
      path: "/login",
      components: {
        mode: login
      }
    }
  ],
  mode:'history'
})
