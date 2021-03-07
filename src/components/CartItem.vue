<template>
  <div>
    <div :class="[$style.name]">
      {{ cartItem.product.name }}
    </div>
    <img :src="cartItem.product.img" :class="[$style.image]">
    <div>
      Price: {{ cartItem.product.price }}
    </div>
    <div>
      Count: {{ cartItem.count }}
    </div>
    <div>
      <button @click="countDown">-</button>
      <button @click="countUp">+</button>
      <button @click="removeItem">Remove</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cartItem: Object
  },
  methods: {
    countDown() {
      this.$emit('countDown', { cartItem: this.cartItem })
    },
    countUp() {
      this.$emit('countUp', { cartItem: this.cartItem })
    },
    removeItem() {
      this.$emit('removeItem', { cartItem: this.cartItem })
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
