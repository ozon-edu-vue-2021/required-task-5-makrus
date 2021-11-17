<template lang="html">
    <div class="cart">
        <div v-for="item in items" :key="item.id" class="item">
            <img :src="item.img" class="item-image" />
            <div class="item-title">{{ item.dish }}</div>
            <div class="item-price">{{ item.price.toFixed(2) }}</div>
            <div class="item-quantity">1</div>
        </div>
        <div id="checkout">
            <button type="button" id="checkout-button" @click="checkout">Оформить</button>
            <div id="total">{{totalCost.toFixed(2)}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: this.$store.state.cart,
                totalCost: this.$store.getters.getTotalCost,
            }
        },
        methods: {
            checkout() {
                let order = this.items.reduce((list, current) => list + ' ' + current.dish + ', ', '');
                order += this.totalCost.toFixed(2);
                alert(order);
            }
        }
    }
</script>

<style lang="css" scoped>
.item {
    width: 100%;
}

.item-image, .item-title, .item-price, .item-quantity {
    display: inline-block;
}

.item-image {
    width: 2rem;
    margin-right: 1rem;
}

.item-title {
    width: 15%;
    margin-right: 1rem;
    padding: 0.2rem;
}

.item-price {
    min-width: 10%;
    text-align: right;
}

.item-quantity {
    margin-left: 2rem;
}

#checkout {
    display: flex;
    justify-content: space-between;
    width: 28%;
    margin-top: 1rem;
}
</style>
