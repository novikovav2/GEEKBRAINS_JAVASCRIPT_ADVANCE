<template>
  <div>
    <div :class="[$style.name]">
      {{ product.name }}
    </div>
    <img :src="product.img" :class="[$style.image]">
    <div>
      Price: {{ product.price }}
      <button>Add to cart </button>
    </div>

  </div>
</template>

<script>

export default {
  props: {
    product: Object
  },
  methods: {
    addToCart() {
      console.log("Add to cart product:" + this.product);
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
