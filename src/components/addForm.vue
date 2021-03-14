<template>
  <div>
    <input type="text" placeholder="name" v-model="name"> <br>
    <input type="text" placeholder="price" v-model="price"> <br>
    <button @click="addProduct">Add</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  data() {
    return {
      name: '',
      price: ''
    }
  },
  methods: {
    ...mapActions([
        'addProductToCatalog'
    ]),
    addProduct () {
      const data = {'name': this.name, 'price': this.price}
      this.addProductToCatalog(data);
    }
  }
}
</script>

<style scoped>

</style>
