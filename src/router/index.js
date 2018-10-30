import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BeforeEach from './beforeEach.js'

//import Test from '@/components/test.vue'
//import ShopPro from '@/pages/shopPro/index.vue'
//import TodoPro from '@/pages/todoPro/index.vue'

Vue.use(Router)

const Test = r => require.ensure([], () => r(require('@/components/test.vue')), 'chunkname1')
const ShopPro = r => require.ensure([], () => r(require('@/pages/shopPro/index.vue')), 'chunkname2')
const TodoPro = r => require.ensure([], () => r(require('@/pages/todoPro/index.vue')), 'chunkname3')

//export default new Router({
const router = new Router({
	mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },

    {
      path: '/test',
      name: 'Test',
      component: Test,
      meta:{title:'2222222222'},
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
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
//  {
//    path: '*',
//    name: 'TodoPro',
//    component: TodoPro
//  },
  ]
});
router.beforeEach(BeforeEach);
export default router;