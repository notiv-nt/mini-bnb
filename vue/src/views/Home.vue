<template>
  <div class="home-container">
    <listing-summary-group
      v-for="(group, country) in listingGroups"
      :key="country"
      :listings="group"
      :country="country"
      class="listing-summary-group"
    ></listing-summary-group>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, ref } from 'vue';
import { get } from '@/lib/http';

import ListingSummaryGroup from '../components/Listing/SummaryGroup.vue';

export default {
  components: {
    ListingSummaryGroup,
  },

  setup() {
    const places = ref([]);
    const listingGroups = computed(() => places.value);

    onMounted(async () => {
      const data = await get('/listing/summary');

      places.value = data;
    });

    return {
      listingGroups,
    };
  },
};
</script>
