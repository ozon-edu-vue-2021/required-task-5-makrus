<template>
  <div id="app">
      <Card v-for="good in goods" :key="good.id" :item="good" />
  </div>
</template>

<script>
import Card from "@/components/Card";

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
           item.img = "../assets/images/6123150777.webp";
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
