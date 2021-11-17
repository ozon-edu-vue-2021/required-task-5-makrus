<template lang="html">
  <div class="card">
    <img :src="item.img" />
    <h3 class="item-title">{{ item.dish }}</h3>
    <div class="price">{{ item.price }}</div>
    <button
        type="button"
        class="button-tocart"
        @click="addToCart(item)"
    >
        В корзину
    </button>
  </div>
</template>

<script>
    export default {
      props: {
          item: Object,
      },
      methods: {
          addToCart(item) {
              this.$store.commit('addGoods', item);
          }
      }

    };
</script>

<style lang="css" scoped>
    .card {
        display: inline-block;
        width: 23%;
        margin: 1%;
    }
    .button-tocart {
        margin-top: 1rem;
    }
</style>
