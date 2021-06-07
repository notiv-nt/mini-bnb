<template>
  <div class="home-container">
    <SummaryGroup
      v-for="(group, country) in places"
      :key="country"
      :listings="group"
      :country="country"
      class="listing-summary-group"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SummaryGroup from '../components/Listing/SummaryGroup.vue';

export default Vue.extend({
  components: {
    SummaryGroup,
  },

  async asyncData({ $http }) {
    return {
      places: await $http.$get(`/listing/summary`),
    };
  },

  data: () => ({
    places: [],
  }),

  head() {
    return {
      title: 'MiniBnb',
    };
  },
});
</script>
