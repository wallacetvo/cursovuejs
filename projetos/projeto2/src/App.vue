<template>
  <div>
    <titulo v-bind:titulo = "titulo"></titulo>
    <menupag></menupag>
    <homepag></homepag>
  </div>
</template>

<script>
export default {
  data(){
    return{
      titulo: 'Exercício 3 - Wallace Oliveira'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
