import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Titulo from './components/titulo.vue'
import Tabela from './components/tabela.vue'
import Formulario from './components/formulario.vue'
import MenuPag from './components/menu.vue'
import HomePag from './components/home.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const routes = [
  { path: '/',           component: App,        name: 'homepag'},
  // { path: '/home',       component: App,        name: 'homepag'},
  { path: '/titulo',     component: Titulo,     name: 'titulo'},
  { path: '/tabela',     component: Tabela,     name: 'tabela',     props: {titulo:'Tabela'}},
  { path: '/formulario', component: Formulario, name: 'formulario', props: {titulo:'Formulário'}},
];

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)

Vue.component('titulo',     Titulo);
Vue.component('tabela',     Tabela);
Vue.component('formulario', Formulario);
Vue.component('menupag',    MenuPag);
Vue.component('homepag',    HomePag);

new Vue({
  router
}).$mount('#app')
