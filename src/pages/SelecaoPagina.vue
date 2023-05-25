<template>
  <q-page class="container">
    <img
      alt="Quasar logo"
      src="~assets/logo_provisorio.svg"
      style="width: 200px; height: 200px"
    />
    <q-btn label="Voltar" to="/pagina2" icon="west" />
    <q-btn label="Próximo" icon-right="east" to="pagina3" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SelecaoPagina",
});
</script>
