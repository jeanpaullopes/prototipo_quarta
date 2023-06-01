<template>
  <q-input
    v-model="valor"
    style="width: 80px"
    :type="isPwd ? 'password' : 'text'"
  /><q-btn
    icon="visibility"
    v-if="password"
    @click="isPwd = false"
    @mouseover="isPwd = false"
    @mouseleave="isPwd = true"
  />
  <table>
    <tr>
      <td><q-btn outline label="1" @click="tecla(1)" /></td>
      <td><q-btn outline label="2" @click="tecla(2)" /></td>
      <td><q-btn outline label="3" @click="tecla(3)" /></td>
    </tr>
    <tr>
      <td><q-btn outline label="4" @click="tecla(4)" /></td>
      <td><q-btn outline label="5" @click="tecla(5)" /></td>
      <td><q-btn outline label="6" @click="tecla(6)" /></td>
    </tr>
    <tr>
      <td>7</td>
      <td>8</td>
      <td>9</td>
    </tr>
    <tr>
      <td></td>
      <td>0</td>
      <td></td>
    </tr>
  </table>
</template>
<script>
export default {
  name: "PinPad",
  props: {
    password: Boolean,
  },
  data() {
    return {
      valor: "",
      isPwd: false,
    };
  },
  created() {
    this.isPwd = this.password;
  },
  methods: {
    tecla(num) {
      this.valor += num;
    },
  },
};
</script>
