import { createRouter, createWebHistory } from 'vue-router';

import store from '../store';


import LoginForm from '../components/auth/LoginForm.vue';
import RegisterForm from '../components/auth/RegisterForm.vue';
import ForgetPassword from '../components/auth/ForgetPassword.vue';

import TaskManager from '../components/TaskManager.vue'; 

import Home from '../components/Home.vue';

import PageNotFound from '../components/PageNotFound.vue';

import AboutMe  from '../components/AboutMe.vue';

import Dashboard from '../components/Dashboard.vue';

import UserProfile from '../components/auth/UserProfile.vue';

import Settings from '../components/Settings.vue';
import Sidebar from '../components/Sidebar.vue';








const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: LoginForm },
  { path: '/register', name: 'Register', component: RegisterForm },
  { path: '/forget-password', name: 'ForgetPassword', component: ForgetPassword },
  { path: '/tasks',name: 'TaskManager',component: TaskManager },

/*   {
    path: '/user-profile' , name: UserProfile , componant: Userprofile

  }, */


  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },


  {
    path: '/about-me',
    name: 'AboutMe',
    component: AboutMe,
  },

  {
    path: '/user-profile',
    name: UserProfile,
    component: UserProfile
  },

  {
    path: '/settings',
    name: Settings,
    component: Settings
  },


  {
    path: '/sidebar',
    name: Sidebar,
    component: Sidebar
  },






  { path: '/:pathMatch(.*)*', name: '404', component: PageNotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});






export default router;
