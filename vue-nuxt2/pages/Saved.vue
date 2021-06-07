<template>
  <div id="saved" class="saved-container">
    <h1>Saved listings</h1>

    <div v-if="listings.length" class="listing-summaries">
      <Summary v-for="listing in listings" :key="listing.id" :listing="listing" />
    </div>

    <div v-else>No saved listings.</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Summary from '../components/Listing/Summary.vue';

export default Vue.extend({
  components: {
    Summary,
  },

  async asyncData({ $http }) {
    return {
      listings: await $http.$get('/listing/saved'),
    };
  },

  data: () => ({
    listings: [],
  }),

  head() {
    return {
      title: 'Saved listings',
    };
  },
});
</script>

<style lang="scss" scoped>
.listing-summaries {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  overflow: hidden;
}

.listing-summaries .listing-summary {
  padding-bottom: 30px;
}

.listing-summaries > .listing-summary {
  margin-right: 15px;
}
</style>
