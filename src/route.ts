import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from './pages/indexPage.vue'
import UsersPage from './pages/UsersPage.vue'
import AuthorizationPage from './pages/AuthorizationPage.vue'
import ProfilePage from './pages/ProfilePage.vue'
const routes = [
  { path: '/', component: IndexPage },
  { path: '/user', component: UsersPage },
  { path: '/auth', component: AuthorizationPage },
  { path: '/profile', component: ProfilePage },
]
export const router = createRouter({
  history: createWebHistory(),
  routes,
})
