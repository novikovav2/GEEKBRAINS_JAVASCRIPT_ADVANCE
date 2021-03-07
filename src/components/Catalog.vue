<template>
  <div :class="[$style.catalog]">
    <h2>Каталог</h2>
    <CatalogItem v-for="product in products" :key="product.id" :product="product"/>
  </div>
</template>

<script>
import CatalogItem from "./CatalogItem.vue";

export default {
  components: {
    CatalogItem
  },
  data () {
    return {
      products: [
        { "id": "000001", "name": "Product 1", "price": 10, "img": "/img/product1.png" },
        { "id": "000002", "name": "Product 2", "price": 20, "img": "/img/product2.png" },
        { "id": "000003", "name": "Product 3", "price": 30, "img": "/img/product3.png" }
      ]
    }
  }
}
</script>

<style module>
  .catalog {
    background-color: #ebebeb;
  }
</style>
