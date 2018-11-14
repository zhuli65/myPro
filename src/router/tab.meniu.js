const tabs = r => require.ensure([], () => r(require('@/pages/tabMeniu/index.vue')), 'tabs')
const tabsOne = r => require.ensure([], () => r(require('@/pages/tabMeniu/tabsOne.vue')), 'tabsOne')
const tabsTwo = r => require.ensure([], () => r(require('@/pages/tabMeniu/tabsTwo.vue')), 'tabsTwo')

const rounter = [
  {
    path: '/tabs',
    name: 'tabs',
    component: tabs,
    children: [
      {
        path: '',
        name: 'tabsOne',
        component: tabsOne
      },
      {
        path: 'one',
        name: 'tabsOne',
        component: tabsOne
      },
      {
        path: 'two',
        name: 'tabsTwo',
        component: tabsTwo
      }
    ]
  }

]
export default rounter
