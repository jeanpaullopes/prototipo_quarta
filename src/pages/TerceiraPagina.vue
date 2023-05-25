<template>
  <q-page class="container">
    <img
      alt="Quasar logo"
      src="~assets/logo_provisorio.svg"
      style="width: 200px; height: 200px"
    />
    <h2>Pagamento ou Cartão</h2>
    <h4>
      Você escolheu o produto {{ produtoSelecionado.descricao }} R$
      {{ produtoSelecionado.preco }}
    </h4>
    <div v-if="produtoSelecionado.informaQtd">
      e ai, vai quantos? <q-input type="number" v-model="quantidade" min="1" />
    </div>
    <q-btn label="Voltar" to="/pagina2" icon="west" />
    <q-btn to="/pagina4" label="Próximo" icon-right="east" />
  </q-page>
</template>

<script>
import { appStore } from "src/stores/appStore";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SegundaPagina",
  data() {
    return {
      produtoSelecionado: "",
      quantidade: 1,
    };
  },
  created() {
    this.produtoSelecionado = appStore.getProduto(appStore.produto);
  },
});
</script>
