<template>
  <div class="header">
    <div class="img" :style="headerImageStyle">
      <listing-save :id="id" :button="true"></listing-save>
    </div>
  </div>
</template>
<script>
import ListingSave from './Listing/Save.vue';

export default {
  computed: {
    headerImageStyle() {
      return {
        'background-image': `url(${this.imageUrl})`,
      };
    },
  },
  props: ['image-url', 'id'],
  components: {
    ListingSave,
  },
};
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

.img /deep/ button {
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
