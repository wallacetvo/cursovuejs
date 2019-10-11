<template>
<div>
    <titulo :titulo = "titulo"></titulo>
    <menupag></menupag>
    <br>

    <form action="#" method="post">
        <p>Nome:</p>
        <input type="text" name="nome" value="" v-model="nome"/>

        <p>Em qual unidade você está alocado?</p>
        <select name="selectUnidade" id="selectUnidade" v-model="unidadeSelecionada">
            <option value="">Selecione uma opção</option>
            <option v-bind:value="unidade.codigo"
                    v-for="unidade in unidades" :key="unidade.codigo"
                    v-text="unidade.nome"></option>
        </select>

        <p>Atividades da Empresa:</p>
        <textarea name="atividade" id="atividade" cols="60" rows="5" v-model="atividade"></textarea>
    </form>

    <br>
    <input type="button" v-on:click="mostraDados" value="Salvar">
</div>
</template>

<script>
export default {
    props: {
        titulo: {
            type: String,
            default: "Título Padrão"
        }
    },
    data() {
        return  {
            unidadeSelecionada: '',
            nome: '',
            atividade: '',
            unidades: [
                {'nome': 'Sede',    'codigo': '1'},
                {'nome': 'Tupis',   'codigo': '2'},
                {'nome': 'BHTrans', 'codigo': '3'},
                {'nome': 'BeloTur', 'codigo': '4'}
            ],
        }
    },
    methods: {
        mostraDados(){
            alert('Dados salvos!');
            this.$router.push('/');
        }
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