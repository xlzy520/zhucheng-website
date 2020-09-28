import Vue from 'vue'
import Router from 'vue-router'

import BasicLayout from '@/layout/basicLayout'
import BasicLayoutWhite from '@/layout/basicLayoutWhite'


import Home from '@/pages/Home'
import About from '@/pages/About'
import Query from '@/pages/Query'
import ContactUs from '@/pages/ContactUs/index'
import News from '@/pages/News'
import NewsDetail from '@/pages/NewsDetail'
import Solution from '@/pages/Solution'

// import TE from '@/pages/About/components/ChooseUs'


Vue.use(Router)

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    // {path: '/test', component: TE},
    {
			path: '/',
			component: BasicLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: '/about',
          name: 'about',
          component: About
        },
        {
          path: '/news',
          name: 'news',
          component: News
        },
        {
          path: '/news/:id',
          name: 'newsDetail',
          component: NewsDetail
        },
        {
          path: '/solution',
          name: 'solution',
          component: Solution
        },
        {
          path: '/contactus',
          name: 'contactus',
          component: ContactUs
        },
      ]
		},
    {
      path: '/query',
      component: BasicLayoutWhite,
      children: [
        {
          path: '',
          name: 'query',
          component: Query
        },
      ]
    }
	]
})
