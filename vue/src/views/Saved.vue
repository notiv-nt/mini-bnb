<template>
  <div id="saved" class="saved-container">
    <h1>Saved listings</h1>

    <div v-if="listings.length" class="listing-summaries">
      <ListingSummary v-for="listing in listings" :listing="listing" :key="listing.id"></ListingSummary>
    </div>

    <div v-else>No saved listings.</div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import { get } from '@/lib/http';
import ListingSummary from '../components/Listing/Summary.vue';

export default {
  components: {
    ListingSummary,
  },

  setup() {
    const listings = ref([]);

    onMounted(async () => {
      const data = await get('/listing/saved');

      listings.value = data;
    });

    return {
      listings,
    };
  },
};
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
