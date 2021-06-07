<template>
  <div v-if="!listing"></div>

  <div v-else>
    <header-image :image-url="listing.images[0]" :id="listing.id"></header-image>

    <div class="listing-container">
      <div class="heading">
        <h1>{{ listing.title }}</h1>
        <p>{{ listing.address }}</p>
      </div>

      <hr />

      <div class="about">
        <h3>About this listing</h3>
        <expandable-text>{{ listing.about }}</expandable-text>
      </div>

      <div class="lists">
        <FeatureList title="Amenities" :items="amenities">
          <template v-slot="amenity">
            <i class="fa fa-lg" :class="amenity.icon"></i>
            <span>{{ amenity.title }}</span>
          </template>
        </FeatureList>

        <FeatureList title="Prices" :items="prices">
          <template v-slot="price">
            {{ price.title }}: <strong>{{ price.value }}</strong>
          </template>
        </FeatureList>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import { get } from '@/lib/http';
import { useRoute } from 'vue-router';
import { populatePrices, populateAmenities } from '@/lib/helpers';
import FeatureList from '../components/FeatureList.vue';
import HeaderImage from '../components/HeaderImage.vue';
import ExpandableText from '../components/ExpandableText.vue';

export default {
  components: {
    HeaderImage,
    ExpandableText,
    FeatureList,
  },

  setup() {
    const listing = ref(null);
    const prices = ref<{ title: string; value: string }[]>([]);
    const amenities = ref<{ title: string; icon: string }[]>([]);

    const route = useRoute();
    const { id } = route.params;

    onMounted(async () => {
      const el = await get(`/listing/${id}`);

      listing.value = el;

      prices.value = populatePrices(el);
      amenities.value = populateAmenities(el);
    });

    return {
      listing,
      prices,
      amenities,
    };
  },
};
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
