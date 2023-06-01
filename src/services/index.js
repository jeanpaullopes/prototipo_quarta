import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:3000/",
});
const services = {
  getMenu(nome, callback) {
    api.get(nome).then((res) => {
      callback(res.data);
    });

    /*callback({
      titulo: "mocado",
      opcoes: [
        { value: 1, label: "oooo", icon: "menu" },

        { value: 3, label: "ccccc", icon: "east" },
      ],
    });
    */
  },
};

export default services;
