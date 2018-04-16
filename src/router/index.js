import Vue from 'vue'
import Router from 'vue-router'
import pos from '@/components/page/pos'
import store from '@/components/page/store'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/pos',
      name: 'pos',
      component: pos
    },
    {
      path: '/store',
      name: 'store',
      component: store
    },{
      path:'*',
      redirect:'/pos'
    }
  ]
})
