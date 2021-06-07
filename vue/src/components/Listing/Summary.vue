<template>
  <div class="listing-summary">
    <router-link :to="{ name: 'listing', params: { id: listing.id } }">
      <div class="wrapper">
        <div class="thumbnail" :style="backgroundImageStyle"></div>
        <div class="info title">
          <span>{{ listing.price_per_night }}</span>
          {{ ' ' }}
          <span>{{ listing.title }}</span>
        </div>
        <div class="info address">{{ listing.address }}</div>
      </div>
    </router-link>
    <listing-save :id="listing.id" v-if="isAuthenticated"></listing-save>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import { Listing } from '@/interfaces';
import ListingSave from './Save.vue';

interface Props {
  listing: Listing;
}

export default {
  components: {
    ListingSave,
  },

  props: {
    listing: {
      type: Object,
      required: true,
    },
  },

  setup(props: Props) {
    const { getters } = useStore();

    const backgroundImageStyle = computed(() => ({
      'background-image': `url("${props.listing.thumbnail}")`,
    }));

    return {
      isAuthenticated: computed(() => getters.isAuthenticated),
      backgroundImageStyle,
    };
  },
};
</script>

<style>
.listing-summary {
  flex: 0 0 auto;
  position: relative;
}

.listing-summary a {
  text-decoration: none;
}

.listing-summary .wrapper {
  max-width: 350px;
  display: block;
}

.listing-summary .thumbnail {
  width: 350px;
  height: 250px;
  background-size: cover;
  background-position: center;
}

.listing-summary .info {
  color: #484848;
  word-wrap: break-word;
  letter-spacing: 0.2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.listing-summary .info.title {
  padding-top: 5px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
}

.listing-summary .info.address {
  font-size: 14px;
  line-height: 18px;
}

@media (max-width: 400px) {
  .listing-summary .listing-save {
    left: 15px;
    right: auto;
  }
}
</style>
