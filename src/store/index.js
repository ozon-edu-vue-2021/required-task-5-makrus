import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const images = ['6123150777.webp', '6126039472.webp', '6126040354.webp', '6128597660.webp', '6134992334.webp', '6136170572.webp', '6136172483.webp', '6140906765.webp', '6142673815.webp', '6142681673.webp', '6142683276.webp', '6148226736.webp']

export default new Vuex.Store({
  state: {
    goods: [],
    cart: [],
  },
  getters: {
    getTotalCost(state) {
      return state.cart.reduce((sum, current) => sum + current.price, 0);
    },
  },
  mutations: {
      addGoods(state, good) {
         state.cart.push(good);
      }
  },
  actions: {
    getGoods() {
      axios
        .get("https://random-data-api.com/api/food/random_food?size=30")
        .then((response) => {
          this.state.goods = response.data;
          this.state.goods.map(item => {
             item.price = Math.random() * 290 + 10;
             let img = images[Math.floor(Math.random() * 12)];
             item.img = require(`../assets/images/${img}`);
             return item;
          })
        })
        .catch((error) => console.log(error));
    },
  },
  modules: {},
});
