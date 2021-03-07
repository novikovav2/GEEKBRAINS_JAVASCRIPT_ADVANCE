<template>
  <div>
    Интернет магазин
    <Cart />
    <Catalog />
  </div>
</template>

<script>
import Cart from "./components/Cart.vue";
import Catalog from "./components/Catalog.vue";

export default {
  components: {
    Cart,
    Catalog,
  }
}
</script>

<style>

</style>
