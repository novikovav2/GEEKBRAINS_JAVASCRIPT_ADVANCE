<template>
  <div :class="[$style.catalog]">
    <h2>Каталог</h2>
    <button @click="loadMore">Загрузить еще одежду</button>
    <CatalogItem v-for="product in getData"
                 :key="product.id"
                 :id="product.id"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CatalogItem from "./CatalogItem.vue";

export default {
  components: {
    CatalogItem
  },
  methods: {
    ...mapActions([
        'requestData'
    ]),
    loadMore() {
      this.currentPage++;
      this.requestData(this.currentPage)
    }
  },
  computed: {
    ...mapGetters([
        'getData'
    ])
  },
  created() {
    this.requestData(this.currentPage);
  },
  data () {
    return {
      currentPage: 1
    }
  }
}
</script>

<style module>
  .catalog {
    background-color: #ebebeb;
  }
</style>
