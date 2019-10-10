import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Titulo from './components/titulo.vue'

const routes = [
  { path: '/',           component: App,    name: 'home'},
  { path: '/titulo',     component: Titulo, name: 'titulo'},
  { path: '/tabela',     component: App,    name: 'tabela'},
  { path: '/formulario', component: App,    name: 'formulario'},
];

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

Vue.component('titulo', Titulo);

new Vue({
  router
}).$mount('#app')
