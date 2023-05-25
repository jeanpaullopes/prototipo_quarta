<template>
  <q-page class="container">
    <img
      alt="Quasar logo"
      src="~assets/logo_provisorio.svg"
      style="width: 200px; height: 200px"
    />
    <div>
      <div class="q-pa-md">
        <q-option-group :options="options" type="radio" v-model="produto" />
      </div>
      {{ produto }}
    </div>
    <q-btn label="Voltar" to="/" icon="west" />
    <q-btn
      label="Próximo"
      icon-right="east"
      to="/pagina3"
      v-show="produto != null"
    />
    <q-btn label="Próximo Alt" icon-right="east" @click="vaiProProximo" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import { appStore } from "src/stores/appStore";

const $q = useQuasar();

export default defineComponent({
  name: "SegundaPagina",
  data() {
    return {
      produto: null,
      options: [],
    };
  },
  created() {
    this.produto = appStore.produto;
    let opts = [];
    appStore.produtosVenda.forEach((p) => {
      opts.push({
        label: p.descricao + (p.preco > 0 ? "  R$ " + p.preco : ""),
        value: p.id,
      });
    });
    this.options = opts;
  },
  methods: {
    vaiProProximo() {
      if (this.produto == null) {
        this.$q.notify({
          message: "Selecione o produto desejado",
          color: "negative",
          position: "bottom",
          icon: "info",
        });
      } else {
        appStore.setProduto(this.produto);
        if (appStore.produtoInformaValor(this.produto)) {
          this.$router.push("/selecao");
        } else {
          this.$router.push("/pagina3");
        }
      }
    },
  },
});
</script>
