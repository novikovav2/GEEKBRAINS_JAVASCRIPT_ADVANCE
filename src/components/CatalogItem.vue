<template>
  <div>
    <div :class="[$style.name]">
      {{ product.name }}
    </div>
    <img :src="product.img" :class="[$style.image]">
    <div>
      Price: {{ product.price }}
      <button @click="addToCart(id)">Add to cart </button>
    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  props: {
    id: String
  },
  methods: {
    ...mapActions([
        'addToCart'
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
  }

  .image {
    height: 250px;
  }
</style>
