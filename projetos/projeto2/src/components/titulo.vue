<template>
<div>
    <h1>{{titulo}}</h1>
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
    h1 {
        text-align: center;
    }
</style>