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

    <br>
    <input type="button" v-on:click="mostraDados" value="Mostrar">
    <br>
    <strong>Total dos salários (Method):</strong> {{calculaSalarioMethod()}}
    <br>
    <strong>Total dos salários (Computed):</strong> {{calculaSalarioComputed}}
    <br>
    <strong>Total contador (Method):</strong> {{contadorMethod}}
    <br>
    <strong>Total contador (Computed):</strong> {{contadorComputed}}
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
            contadorComputed: 0
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
            this.contadorMethod ++;
            var total = 0;
            for (var valor of this.registros){
                total += valor.salario;
            }
            return total;
        }
    },
    computed: { // Processamento único, apenas quando é chamado
        calculaSalarioComputed(){
            this.contadorComputed ++;
            var total = 0;
            for (var valor of this.registros){
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
        color: blue;
        font: 1em arial;
        border: 2px solid blue;
    }
    td, th {
        border: 1px solid blue;
    }
</style>