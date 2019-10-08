<template>
<div>
    <titulo titulo="Teste de Resultados" cor_t="green" subtitulo="Resultados" cor_s="yellow"></titulo>

    <table id="tabela" border="1">
    <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
    </tr>
    <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
    </tr>
    </table> 
</div>
</template>

<script>
export default {
    props: ['titulo','cor_t','subtitulo','cor_s']
}
</script>

<style>
    #tabela {
        width: 100%;
        text-align: center;
        color: blue;
        font: 1em arial;
    }
</style>