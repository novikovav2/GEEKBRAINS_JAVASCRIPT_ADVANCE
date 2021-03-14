<template>
  <div :class="[$style.cart]" >
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
import { mapGetters, mapActions } from 'vuex';
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
      let price = 0;
      // Необходимо из-за того, что каталог загружается позже корзины и в самом начале
      // TypeError: Cannot read property 'price' of undefined
      // из-за чего корзина перестает грузиться
      try {
        price = this.getCartData.reduce((res, cur) => {
          return res + this.getProduct(cur.id).price * cur.count;
        },0);
      } catch (err) {
        console.log(err);
      }
      return price;
    }
  },
  methods: {
    ...mapActions([
        'requestCartData'
    ])
  },
  created() {
    this.requestCartData();
  },
}
</script>

<style module>
.cart {
  background-color: #F1E4E6;
  margin-bottom: 24px;
}

</style>
