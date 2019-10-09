import Vue from 'vue'
import App from './App.vue'
import Titulo from './components/titulo.vue'
import Tabela from './components/tabela.vue'
import TabelaForm from './components/tabelaForm.vue'
import VueRouter from 'vue-router'

const routes = [
  { path: '/',       component: App},
  { path: '/tabela', component: Tabela},
  { path: '/titulo', component: Titulo}
];
const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false
Vue.use(VueRouter)

Vue.component('titulo',     Titulo);
Vue.component('tabela',     Tabela);
Vue.component('tabelaForm', TabelaForm);

new Vue({
  router
}).$mount('#app')
