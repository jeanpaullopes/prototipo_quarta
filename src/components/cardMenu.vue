<template>
  <div class="">
    <div class="text-h4">{{ titulo }}</div>
    <div>
      <span v-for="opcao in opcoes" :key="opcao.value">
        <q-btn
          dense
          outline
          :icon="opcao.icon"
          :label="opcao.label"
          @click="clickOpcao(opcao.value)"
        ></q-btn>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardMenu",
  props: {
    opcoes: [],
    titulo: String,
  },
  data() {
    return {};
  },
  methods: {
    clickOpcao(value) {
      this.$emit("clickOpcao", value);
    },
  },
};
</script>
