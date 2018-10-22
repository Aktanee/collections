<template>
  <div class="collection" v-if="collection" @click="openLinks">
    {{ collection.name }}
  </div>
</template>

<script>
export default {
  name: 'Collection',
  props: {
    collection: {
      type: Object,
      default() {
        return {name: 'Default', urls: []}
      },
    },
  },
  methods: {
    openLinks() {
      this.collection.urls.forEach(url => {
        this.$chrome.tabs.create({url})
      })
    },
  },
}
</script>
