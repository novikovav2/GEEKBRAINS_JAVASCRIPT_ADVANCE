<template>
  <div :class="[$style.cart]">
    <h2>Корзина</h2>
    <CartItem v-for="cartItem in getCartData"
              :key="cartItem.id"
              :id="cartItem.id"
              :count="cartItem.count"
    />
    <div>
      Total price: {{ getTotalPrice }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CartItem from "./CartItem.vue";

export default {
  components: {
    CartItem
  },
  computed: {
    ...mapGetters([
        'getCartData',
        'getProduct'
    ]),
    getTotalPrice: function () {
      return this.getCartData.reduce((res, cur) => {
        return res + this.getProduct(cur.id).price * cur.count;
      },0);
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
