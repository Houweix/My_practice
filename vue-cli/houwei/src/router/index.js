import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import houwei from '@/components/houwei'
import child1 from '@/components/child1'
import child2 from '@/components/child2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/h',
      name: 'houwei',
      component: houwei,

      // 配置子路由（children）
      children:[{
        path: 'child1',
        name: 'child1',
        component: child1
      },{path: 'child2',
        name: 'child2',
        component: child2
      }]

    }
  ]
})
