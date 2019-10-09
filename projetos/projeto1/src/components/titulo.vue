<template>
<div>
    <!-- Sempre tem que haver apenas 1 tag pai, neste caso, é a DIV -->
    <h1 v-bind:style="{color: cor_t}">{{titulo}}</h1>
    <h2 v-bind:style="{color: cor_s}">{{subtitulo}}</h2>
</div>
</template>

<script>
export default {
    props: {
        titulo: {
            type: String,
            default: "Título Padrão"
        },
        cor_t: {
            type: String,
            default: "black"
        },
        subtitulo: {
            type: String,
            default: "Subtítulo Padrão"
        },
        cor_s: {
            type: String,
            default: "black"
        }
    }
}
</script>

<style>
    h1 {
        text-align: center;
    }
    h2 {
        text-align: left;
    }
</style>