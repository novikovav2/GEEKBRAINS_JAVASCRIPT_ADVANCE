<template>
  <div>
    <div :class="[$style.name]">
      {{ product.name }}
    </div>
    <img :src="product.img" :class="[$style.image]">
    <div>
      Price: {{ product.price }}
    </div>
    <div>
      Count: {{ count }}
    </div>
    <div>
      <button @click="reduceInCart(id)">-</button>
      <button @click="addToCart(id)">+</button>
      <button @click="removeFromCart(id)">Remove</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  props: {
    id: String,
    count: Number
  },
  methods: {
    ...mapActions([
        'addToCart',
        'removeFromCart',
        'reduceInCart'
    ])
  },
  computed: {
    ...mapGetters([
        'getProduct'
    ]),
    product: function () {
      return this.getProduct(this.id);
    }
  }
}
</script>

<style module>
.name {
  font-weight: bold;
  margin-top: 8px;
}

.image {
  height: 150px;
}
</style>
