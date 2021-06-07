<template>
  <div class="header">
    <div class="img" :style="headerImageStyle">
      <ListingSave :id="id" :button="true" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ListingSave from './Listing/Save.vue';

export default Vue.extend({
  components: {
    ListingSave,
  },

  props: {
    imageUrl: {
      type: String,
      required: true,
    },

    id: {
      type: Number,
      required: true,
    },
  },

  computed: {
    headerImageStyle(): object {
      return {
        'background-image': `url(${this.imageUrl})`,
      };
    },
  },
});
</script>

<style lang="scss" scoped>
.header {
  height: 320px;
}

.img {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  background-color: #f5f5f5;
  height: 100%;
  cursor: pointer;
  position: relative;
}

.img ::v-deep button {
  font-size: 14px;
  padding: 7px 18px;
  color: #484848;
  line-height: 1.43;
  background: #ffffff;
  font-weight: bold;
  border-radius: 4px;
  border: 1px solid #c4c4c4;
}
</style>
