<template>
  <div class="listing-summary-group">
    <h1>Places in {{ country }}</h1>

    <div class="listing-carousel">
      <div class="controls">
        <CarouselControl dir="left" :style="leftArrowStyle" @change-image="change" />
        <CarouselControl dir="right" :style="rightArrowStyle" @change-image="change" />
      </div>

      <div class="listing-summaries-wrapper">
        <div class="listing-summaries" :style="style">
          <Summary v-for="listing in listings" :key="listing.id" :listing="listing" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import Summary from './Summary.vue';
import CarouselControl from './CarouselControl.vue';
import { Listing } from '~/interfaces';

const rowSize = 3;
const listingSummaryWidth = 365;

export default Vue.extend({
  components: {
    Summary,
    CarouselControl,
  },

  props: {
    country: {
      type: String,
      required: true,
    },

    listings: {
      type: Array as PropType<Listing[]>,
      required: true,
    },
  },

  data: () => ({
    offset: 0,
  }),

  computed: {
    style(): object {
      return { transform: `translateX(${this.offset * -listingSummaryWidth}px)` };
    },

    leftArrowStyle(): object {
      return { visibility: this.offset > 0 ? 'visible' : 'hidden' };
    },

    rightArrowStyle(): object {
      return { visibility: this.offset < (this.listings?.length || 0) - rowSize ? 'visible' : 'hidden' };
    },
  },

  methods: {
    change(val: string): void {
      const newVal = this.offset + parseInt(val, 10);
      const listLen = this.listings?.length || 0;

      if (newVal >= 0 && newVal <= listLen - rowSize) {
        this.offset = newVal;
      }
    },
  },
});
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
