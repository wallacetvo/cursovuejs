import Vue from 'vue'
import App from './App.vue'
import Titulo from './components/titulo.vue'
import Tabela from './components/tabela.vue'
import TabelaDB from './components/tabelaDB.vue'
import TabelaForm from './components/tabelaForm.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

const routes = [
  { path: '/',           component: App,        name: 'home'},
  { path: '/titulo',     component: Titulo,     name: 'titulo',     props: {titulo: 'Teste 4', cor_t: 'orange'}},
  { path: '/tabela',     component: Tabela,     name: 'tabela'},
  { path: '/tabelaDB',   component: TabelaDB,   name: 'tabelaDB'},
  { path: '/tabelaForm', component: TabelaForm, name: 'tabelaForm'},
];
const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

Vue.component('titulo',     Titulo);
Vue.component('tabela',     Tabela);
Vue.component('tabelaDB',   TabelaDB);
Vue.component('tabelaForm', TabelaForm);

new Vue({
  router
}).$mount('#app')
