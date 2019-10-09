<template>
<div>
    <titulo :titulo    = "titulo"
            :cor_t     = "cor_t"
            :subtitulo = "subtitulo"
            :cor_s     = "cor_s">
    </titulo>

    <table id="tabela">
        <thead>
            <tr>
                <th v-for="item in cabecalho" :key="item" v-text="item" scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="itens in registros" :key="itens.id">
                <td v-for="valor in itens" :key="valor"> {{valor}} </td>
            </tr>
        </tbody>
    </table>

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
    </form>

    <br>
    <strong>Nome alterado {{contadorNome}} vezes.</strong>
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
            contadorMethod: 0,
            contadorComputed: 0,
            unidadeSelecionada: '',
            nome: '',
            unidades: [
                {'nome': 'Sede',    'codigo': '1'},
                {'nome': 'Tupis',   'codigo': '2'},
                {'nome': 'BHTrans', 'codigo': '3'},
                {'nome': 'BeloTur', 'codigo': '4'}
            ],
            contadorNome: 0
        }
    },
    methods: { // Processado toda vez que renderizou a página
        mostraDados(){
            var total = 0;
            for (var valor of this.registros){
                total += valor.salario;
            }
            alert(total);
        },
        calculaSalarioMethod(){
            // this.contadorMethod ++;
            var total = 0;
            for (var valor of this.registros){
                total += valor.salario;
            }
            return total;
        }
    },
    computed: { // Processamento único, apenas quando é chamado
        calculaSalarioComputed(){
            // this.contadorComputed ++;
            var total = 0;
            for (var valor of this.registros){
                total += valor.salario;
            }
            return total;
        }
    },
    watch: {
        unidadeSelecionada: function(x){
            if (x===''){
                alert('Favor selecionar uma opção.');
            }
        },
        nome: function(){
            this.contadorNome ++;
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