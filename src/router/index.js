import Vue from 'vue'
import Router from 'vue-router'

import BasicLayout from '@/layout/basicLayout'
import BasicLayoutWhite from '@/layout/basicLayoutWhite'


import Home from '@/pages/Home'
import About from '@/pages/About'
import Query from '@/pages/Query'



import firstcompontents from '@/pages/firstcompontents'
import secondpage from '@/pages/secondpage'
import solution from '@/pages/solution'
import customercase from '@/pages/customercase'
import newsandinformation from '@/pages/newsandinformation'
import contactus from '@/pages/contactus'
import three from '@/pages/three'

import TE from '@/pages/About/components/ChooseUs'


Vue.use(Router)

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {path: '/test', component: TE},
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
          path: '/solution',
          name: 'solution',
          component: solution
        },
        {
          path: '/customercase',
          name: 'customercase',
          component: customercase
        },
        {
          path: '/newsandinformation',
          name: 'newsandinformation',
          component: newsandinformation
        },
        {
          path: '/contactus',
          name: 'contactus',
          component: contactus
        },
        {
          path: '/three',
          name: 'three',
          component: three
        },
  
        {
          path: '/test1',
          name: 'test1',
          component: firstcompontents
        },
  
        {
          path: '/test2',
          name: 'test2',
          component: secondpage
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
