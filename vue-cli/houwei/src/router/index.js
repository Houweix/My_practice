import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import houwei from '@/components/houwei'
import child1 from '@/components/child1'
import child2 from '@/components/child2'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  // 配置h5历史，默认是hash方法
  mode:'history',
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
      beforeEnter:(to, from, next)=>{
        //进入前的钩子函数
        next();
        //true和默认不写是跳转
      },
      // 配置子路由（children）
      children:[{
        path: 'child1',
        name: 'child1',
        component: child1
      },{path: 'child2',
        name: 'child2',
        component: child2
      }]

    },{
      //错误信息配置
      path: '*',
      component: Error

    }
  ]
})
