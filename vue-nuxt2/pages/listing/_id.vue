<template>
  <div>
    <div v-if="!listing"></div>

    <div v-else>
      <HeaderImage :id="listing.id" :image-url="listing.images[0]"></HeaderImage>

      <div class="listing-container">
        <div class="heading">
          <h1>{{ listing.title }}</h1>
          <p>{{ listing.address }}</p>
        </div>

        <hr />

        <div class="about">
          <h3>About this listing</h3>
          <ExpandableText>{{ listing.about }}</ExpandableText>
        </div>

        <div class="lists">
          <FeatureList title="Amenities" :items="amenities">
            <template #default="amenity">
              <i class="fa fa-lg" :class="amenity.icon"></i>
              <span>{{ amenity.title }}</span>
            </template>
          </FeatureList>

          <FeatureList title="Prices" :items="prices">
            <template #default="price">
              {{ price.title }}: <strong>{{ price.value }}</strong>
            </template>
          </FeatureList>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import FeatureList from '@/components/FeatureList.vue';
import HeaderImage from '@/components/HeaderImage.vue';
import ExpandableText from '@/components/ExpandableText.vue';
import { populatePrices, populateAmenities } from '@/lib/helpers';
import { MetaInfo } from 'vue-meta';
import { Listing } from '~/interfaces';

interface Data {
  listing: null | Listing;
  prices: any[];
  amenities: any[];
}

export default Vue.extend({
  components: {
    HeaderImage,
    ExpandableText,
    FeatureList,
  },

  async asyncData({ $http, params, error }) {
    const listing = await $http.$get(`listing/${params.id}`);

    if (!listing) {
      return error({
        message: 'Listing not found',
        path: '/',
        statusCode: 404,
      });
    }

    return {
      listing,
    };
  },

  data: (): Data => ({
    listing: null,
    prices: [],
    amenities: [],
  }),

  head() {
    const head: MetaInfo = {};

    if (this.listing?.title) {
      head.title = this.listing.title;
    }

    return head;
  },

  beforeMount() {
    this.prices = populatePrices(this.listing as any);
    this.amenities = populateAmenities(this.listing as any);
  },
});
</script>

<style lang="scss" scoped>
.heading {
  margin-bottom: 2em;
}

.heading h1 {
  font-size: 32px;
  font-weight: 700;
}

.heading p {
  font-size: 15px;
  color: #767676;
}

.about {
  margin: 2em 0;
}

hr {
  border-top: 1px solid #dce0e0;
}

.about h3 {
  font-size: 22px;
}
</style>
