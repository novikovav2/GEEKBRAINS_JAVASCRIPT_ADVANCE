<template>
  <div>
    Интернет магазин
    <Cart />
    <Catalog />
    <add-form />
  </div>
</template>

<script>
import Cart from "./components/Cart.vue";
import Catalog from "./components/Catalog.vue";
import addForm from "./components/addForm.vue";

export default {
  components: {
    Cart,
    Catalog,
    addForm
  }
}
</script>

<style>

</style>
