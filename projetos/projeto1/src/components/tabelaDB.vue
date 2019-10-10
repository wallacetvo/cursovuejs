<template>
<div>
    <titulo :titulo    = "titulo"
            :cor_t     = "cor_t"
            :subtitulo = "subtitulo"
            :cor_s     = "cor_s">
    </titulo>

    <router-link :to="{name: 'titulo'}">Clique para ir para o título</router-link>

    <table id="tabela">
        <thead>
            <tr>
                <th v-for="item in cabecalho" :key="item" v-text="item" scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="itens in registroAPI" :key="itens.id">
                <td v-for="valor in itens" :key="valor"> {{valor}} </td>
            </tr>
        </tbody>
    </table>

    <!-- {{ registroAPI }} -->
</div>
</template>

<script>
export default {
    props: ['titulo',
            'cor_t',
            'subtitulo',
            'cor_s',
            'cabecalho',
            'registros'],
    data() {
        return  {
            registroAPI: []
        }
    },
    mounted(){
        this.axios
        .get('http://10.0.2.15:3000/registros')
        .then(response => (this.registroAPI = response.data));
    },
    watch: {
        unidadeSelecionada: function(x){
            if (x===''){
                alert('Favor selecionar uma opção.');
            }
        },
    }
}
</script>

<style>
    #tabela {
        width: 100%;
        text-align: center;
        color: blue;
        font: 1em arial;
        border: 2px solid blue;
    }
    td, th {
        border: 1px solid blue;
    }
</style>