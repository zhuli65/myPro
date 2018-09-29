import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/test.vue'
import ShopPro from '@/pages/shopPro/index.vue'
import TodoPro from '@/pages/todoPro/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/shop/index',
      name: 'ShopPro',
      component: ShopPro
    },
    {
      path: '/todo/index',
      name: 'TodoPro',
      component: TodoPro
    },


  ]
})