<template>
  <div>
    <!-- <tabela v-bind:titulo    = "titulo"
            v-bind:cor_t     = "cor_t"
            v-bind:subtitulo = "subtitulo"
            v-bind:cor_s     = "cor_s"
            v-bind:cabecalho = "cabecalho"
            v-bind:registros = "registros"></tabela> -->
    <tabelaForm v-bind:titulo    = "titulo"
            v-bind:cor_t     = "cor_t"
            v-bind:subtitulo = "subtitulo"
            v-bind:cor_s     = "cor_s"
            v-bind:cabecalho = "cabecalho"
            v-bind:registros = "registros"></tabelaForm>
  </div>
</template>

<script>
export default {
  data(){
    return{
      cabecalho: ['id','Nome','Cargo','Unidade','Salário'],
      registros: [
        {id: 1, nome: 'Paulo',   cargo: 'Analista', unidade: 'Tupis', salario: 2000.00},
        {id: 2, nome: 'Natália', cargo: 'Redatora', unidade: 'Sede',  salario: 1000.00}
      ],
      titulo:    'Teste de Resultados',
      cor_t:     'green',
      subtitulo: 'Resultados',
      cor_s:     'yellow'
    }
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
