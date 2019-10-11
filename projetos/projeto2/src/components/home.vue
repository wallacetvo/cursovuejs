<template>
<div>
    <!-- <titulo>{{titulo}}</titulo> -->
    <!-- <menu></menu> -->
    <h3>Bem Vindo ao Exercício 3!</h3>
</div>
</template>

<script>
export default {
    props: {
        titulo: {
            type: String,
            default: "Título Padrão"
        }
    }
}
</script>

<style>
</style>