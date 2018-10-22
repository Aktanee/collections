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
      collections: [
        {
          name: 'Games',
          urls: ['https://pcgamer.com'],
        },
      ],
    }
  },
}
</script>
