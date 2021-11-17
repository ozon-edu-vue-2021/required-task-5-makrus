import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

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
        })
        .catch((error) => console.log(error));
    },
  },
  modules: {},
});
