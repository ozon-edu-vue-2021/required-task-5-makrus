<template lang="html">
  <div class="card">
    <img :src="item.img" />
    <h3 class="item-title">{{ item.dish }}</h3>
    <div class="price">{{ item.price }}</div>
    <button type="button" name="buy">В корзину</button>
  </div>
</template>

<script>
export default {
  props: { item: Object },
};
</script>

<style lang="css" scoped>
    .card {
        display: inline-block;
        width: 25%;
    }
</style>
