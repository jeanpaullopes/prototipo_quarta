<template>
  <q-page class="container">
    <img
      alt="Quasar logo"
      src="~assets/logo_provisorio.svg"
      style="width: 200px; height: 200px"
    />
    <h2>Bem Vindo!</h2>
    <q-btn label="Iniciar" to="/pagina2" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { appStore } from "src/stores/appStore";
export default defineComponent({
  name: "IndexPage",
  created() {
    appStore.setProduto(null);
  },
});
</script>
