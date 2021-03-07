<template>
  <div :class="[$style.cart]">
    <h2>Корзина</h2>
    <CartItem v-for="cartItem in cartItems"
              :key="cartItem.product.id"
              :cartItem="cartItem"
              @countDown="countDown"
              @countUp="countUp"
              @removeItem="removeItem"
    />
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";

export default {
  components: {
    CartItem
  },
  data () {
    return {
      cartItems: [
        {product: { "id": "000001", "name": "Product 1", "price": 10, "img": "/img/product1.png" }, count: 1},
        {product: { "id": "000002", "name": "Product 2", "price": 20, "img": "/img/product2.png" }, count: 2},
        {product: { "id": "000003", "name": "Product 3", "price": 30, "img": "/img/product3.png" }, count: 3}
      ]
    }
  },
  methods: {
    countDown({ cartItem }) {
      if (!--cartItem.count) {
        this.removeItem({cartItem});
      }
    },
    countUp({ cartItem }) {
      cartItem.count++
    },
    removeItem({cartItem}) {
      const itemIndex = this.cartItems.indexOf(cartItem);
      this.cartItems.splice(itemIndex, 1);
    }
  }
}
</script>

<style module>
.cart {
  background-color: #F1E4E6;
  margin-bottom: 24px;
}

</style>
