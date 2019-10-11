<template>
<div>
    <titulo :titulo = "titulo"></titulo>
    <menupag></menupag>
    <br>

    <table id="tabela">
        <thead>
            <tr>
                <th v-for="item in cabecalho" :key="item.codigo" v-text="item.nome" scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="itens in registroAPI" :key="itens.codigo">
                <td v-for="valor in itens" :key="valor"> {{valor}} </td>
            </tr>
        </tbody>
    </table>

    <br>
    <strong>Total de salários:</strong> {{calculaSalario}}
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
            registroAPI: [],
            cabecalho: [
                {'nome': 'Código',  'codigo': '1'},
                {'nome': 'Nome',    'codigo': '2'},
                {'nome': 'Cargo',   'codigo': '3'},
                {'nome': 'Unidade', 'codigo': '4'},
                {'nome': 'Salário', 'codigo': '5'}
            ]
        }
    },
    mounted(){
        this.axios
        .get('http://10.0.2.15:3000/registros')
        .then(response => (this.registroAPI = response.data));
    },
    computed: { // Processamento único, apenas quando é chamado
        calculaSalario(){
            var total = 0;
            for (var valor of this.registroAPI){
                total += valor.salario;
            }
            return total;
        }
    }
}
</script>

<style>
    #tabela {
        width: 100%;
        text-align: center;
        color: black;
        font: 1em arial;
        border: 2px solid black;
    }
    td, th {
        border: 1px solid black;
    }
</style>