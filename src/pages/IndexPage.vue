<template>
  <q-page class="container">
    <img
      alt="Quasar logo"
      src="~assets/logo_provisorio.svg"
      style="width: 200px; height: 200px"
    />
    <h2>Bem Vindo!</h2>
    <PinPad :password="true" />
    <cardMenu :titulo="title" :opcoes="ops" @clickOpcao="clickMenu1" />

    <cardMenu
      titulo="menu2 da página 1"
      :opcoes="ops2"
      @clickOpcao="clickMenu2"
    />

    <!--<q-btn label="Iniciar" to="/pagina2" />-->
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { appStore } from "src/stores/appStore";
import cardMenu from "src/components/cardMenu.vue";
import services from "src/services";
import PinPad from "src/components/PinPad.vue";
export default defineComponent({
  name: "IndexPage",
  components: {
    cardMenu,
    PinPad,
  },
  data() {
    return {
      ops: [],
      title: "",
      ops2: [
        { value: 21, label: "opcao 21", icon: "menu" },
        { value: 23, label: "opcao 23", icon: "east" },
      ],
    };
  },
  created() {
    appStore.setProduto(null);
    services.getMenu("pagina1", (ret) => {
      this.ops = ret.opcoes;
      this.title = ret.titulo;
    });
    services.getMenu("pagina1", (ret) => {
      this.ops = ret.opcoes;
      this.title = ret.titulo;
    });
  },
  methods: {
    clickMenu1(value) {
      if (value == 3) {
        this.$router.push("/pagina2");
      } else {
        alert(value);
      }
    },
    clickMenu2(value) {
      alert("agopra no menu2 " + value);
    },
  },
});
</script>
