<template>
  <div class="listing-summary-group">
    <h1>Places in {{ country }}</h1>

    <div class="listing-carousel">
      <div class="controls">
        <carousel-control dir="left" @change-image="change" :style="leftArrowStyle"></carousel-control>
        <carousel-control dir="right" @change-image="change" :style="rightArrowStyle"></carousel-control>
      </div>

      <div class="listing-summaries-wrapper">
        <div class="listing-summaries" :style="style">
          <listing-summary v-for="listing in listings" :listing="listing" :key="listing.id"></listing-summary>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ref } from 'vue';
import { Listing } from '@/interfaces';
import ListingSummary from './Summary.vue';
import CarouselControl from './CarouselControl.vue';

const rowSize = 3;
const listingSummaryWidth = 365;

interface Props {
  country: string;
  listings: Listing[];
}

export default {
  components: {
    ListingSummary,
    CarouselControl,
  },

  props: {
    country: {
      type: String,
      required: true,
    },

    listings: {
      type: Array,
      required: true,
    },
  },

  setup(props: Props) {
    const offset = ref(0);

    const style = computed(() => ({ transform: `translateX(${offset.value * -listingSummaryWidth}px)` }));
    const leftArrowStyle = computed(() => ({ visibility: offset.value > 0 ? 'visible' : 'hidden' }));
    const rightArrowStyle = computed(() => ({ visibility: offset.value < (props.listings?.length || 0) - rowSize ? 'visible' : 'hidden' }));

    const change = (val: string) => {
      const newVal = offset.value + parseInt(val, 10);
      const listLen = props.listings?.length || 0;

      if (newVal >= 0 && newVal <= listLen - rowSize) {
        offset.value = newVal;
      }
    };

    return {
      style,
      leftArrowStyle,
      rightArrowStyle,

      change,
    };
  },
};
</script>

<style>
.listing-summary-group {
  padding-bottom: 20px;
}

.listing-summaries-wrapper {
  overflow: hidden;
}

.listing-summaries {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: transform 0.5s;
}
.listing-summaries > .listing-summary {
  margin-right: 15px;
}

.listing-summaries > .listing-summary:last-child {
  margin-right: 0;
}
.listing-carousel {
  position: relative;
}

.listing-carousel .controls {
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: calc(50% - 45px);
  left: -45px;
  width: calc(100% + 90px);
}

.listing-carousel .controls .carousel-control {
  color: #c5c5c5;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
