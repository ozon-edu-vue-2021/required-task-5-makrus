<template>
  <div id="app">
      <Card v-for="good in goods" :key="good.id" :item="good" />
  </div>
</template>

<script>
import Card from "@/components/Card";

const images = ['6123150777.webp', '6126039472.webp', '6126040354.webp', '6128597660.webp', '6134992334.webp', '6136170572.webp', '6136172483.webp', '6140906765.webp', '6142673815.webp', '6142681673.webp', '6142683276.webp', '6148226736.webp']

export default {
  name: "App",
  components: {
      Card,
    // Form,
  },
  computed: {
      goods() {
        return this.$store.state.goods.map(item => {
           item.price = Math.random() * 290 + 10;
           let img = images[Math.floor(Math.random() * 12)];
           item.img = require(`./assets/images/${img}`);
           return item;
        });
      }
  },
  beforeCreate() {
    this.$store.dispatch("getGoods");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  padding: 24px;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
}

* {
  box-sizing: border-box;
}
</style>
