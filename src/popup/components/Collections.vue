<template>
  <div class="collections" v-if="collections">
    <div :key="collection.name" v-for="collection in collections">
      <Collection :collection="collection" />
    </div>
  </div>
</template>

<script>
import Collection from './Collection.vue'

export default {
  name: 'Collections',
  components: {
    Collection,
  },
  data() {
    return {
      collections: false,
    }
  },
  async mounted() {
    this.collections = await this.$storage.getAllCollections()
  },
}
</script>
