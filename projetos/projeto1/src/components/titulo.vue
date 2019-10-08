<template>
<div>
    <!-- Sempre tem que haver apenas 1 tag pai, neste caso, é a DIV -->
    <h1 v-bind:style="{color: cor_t}">{{titulo}}</h1>
    <h2 v-bind:style="{color: cor_s}">{{subtitulo}}</h2>
</div>
</template>

<script>
export default {
    props: ['titulo','cor_t','subtitulo','cor_s']
}
</script>

<style>
</style>