<template>
  <q-page class="container">
    <img
      alt="Quasar logo"
      src="~assets/logo_provisorio.svg"
      style="width: 200px; height: 200px"
    />
    <q-btn label="Voltar" to="/pagina3" icon="west" />
    <q-btn label="Finalizar" icon-right="check" to="/" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SegundaPagina",
});
</script>
