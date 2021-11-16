import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    goods: []
  },
  mutations: {},
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
