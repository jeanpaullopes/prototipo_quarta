import { defineStore } from "pinia";
const useStore = defineStore("appStore", {
  state: () => ({
    produto: null,
    produtosVenda: [
      {
        descricao: "Bilhete Único",
        id: "unico",
        preco: -1,
        informaValor: true,
        informaQtd: false,
      },
      { descricao: "Cartão Top", id: "top", preco: 5.0, informaValor: false },
      {
        descricao: "Unitário",
        id: "unitario",
        preco: 2.4,
        informaValor: false,
        informaQtd: true,
      },
      {
        descricao: "Diário",
        id: "diario",
        preco: 16.0,
        informaValor: false,
        informaQtd: false,
      },
    ],
  }),

  actions: {
    setProduto(prod) {
      this.produto = prod;
    },
    getProduto(id) {
      return this.produtosVenda.find((prod) => prod.id === id);
    },
    produtoInformaValor(id) {
      return this.getProduto(id).informaValor;
    },
  },
});
const appStore = useStore();
export { appStore };
