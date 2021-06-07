<template>
  <i :class="classes" @click="click"></i>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    dir: {
      type: String,
      required: true,
    },
  },

  computed: {
    classes(): string {
      return `carousel-control fa fa-2x fa-chevron-${this.dir}`;
    },
  },

  methods: {
    click(): void {
      this.$emit('change-image', this.dir === 'left' ? -1 : 1);
    },
  },
});
</script>

<style lang="scss">
.carousel-control {
  padding: 1rem;
  color: #ffffff;
  opacity: 0.85;

  @media (min-width: 744px) {
    font-size: 3rem;
  }
}
</style>
