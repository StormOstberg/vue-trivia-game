import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import win from './views/WinView.vue'
import lose from './views/LoseView.vue'
import Champion from './views/ChampionView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/win',
      name: 'win',
      component: win
    },
    {
        path:'/champ',
        name: 'champion',
        component: Champion
    },
    {
      path: '/lose',
      name: 'lose',
      component: lose
    },

  ]
}) 