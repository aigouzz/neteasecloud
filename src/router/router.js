/**
 * 整个app的路由设置
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index'
import Rage from '../views/rage'
import SongList from '../views/songList'
import LeaderBoard from '../views/leaderBoard'
import HotSinger from '../views/hotSinger'
import PlayerDetail from '../views/playerDetail'
import PlayerListDetail from '../views/playListDetail'
Vue.use(VueRouter)
/* eslint-disable */
const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/index',
    component: Index,
    children: [
      {
        path: 'rage',
        component: Rage
      },
      {
        path: 'songList',
        component: SongList
      },
      {
        path: 'leaderBoard',
        component: LeaderBoard
      },
      {
        path: 'hotSinger',
        component: HotSinger
      }
    ]
  }, 
  {
    name: 'playerDetail',
    path: '/playerDetail/:id',
    component: PlayerDetail
  }, 
  {
    path: '/playListDetail/:id',
    name: 'playListDetail',
    component: PlayerListDetail
  }, 
  {
    path: '*', redirect: '/index/rage'
  }]
})

export default router
