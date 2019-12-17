import Vue from 'vue'
import Router from 'vue-router'
import AuthPage from '@/pages/AuthPage'
import Companies from '@/pages/CompaniesListPage'
import NewCompany from '@/pages/NewCompaniesPage'
import StartPage from '@/pages/StartPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'StartPage',
      component: StartPage
    },
    {
      path: '/sign_in',
      name: 'Sign in',
      component: AuthPage
    },
    {
      path: '/companies',
      name: 'Companies',
      component: Companies
    },
    {
      path: '/companies/new',
      name: 'NewCompany',
      component: NewCompany
    }
  ]
})
