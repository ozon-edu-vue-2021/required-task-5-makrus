<template lang="html">
  <div id="storefront">
      <div v-for="item in goods" :key="item.id" class="card">
        <img :src="item.img" />
        <h3 class="item-title">{{ item.dish }}</h3>
        <div class="price">{{ item.price.toFixed(2) }}</div>
        <button
            type="button"
            class="button-tocart"
            @click="addToCart(item)"
        >
            В корзину
        </button>
      </div>
    </div>
</template>

<script>
    export default {
        computed: {
            goods() {
              return this.$store.state.goods;
            }
        },
        methods: {
            addToCart(item) {
                this.$store.commit('addGoods', item);
          }
        },
        beforeCreate() {
            this.$store.dispatch("getGoods");
        },
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
