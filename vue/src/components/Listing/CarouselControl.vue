<template>
  <i :class="classes" @click="click"></i>
</template>

<script lang="ts">
import { computed, SetupContext } from 'vue';

interface Props {
  dir: string;
}

export default {
  props: {
    dir: {
      type: String,
      required: true,
    },
  },

  setup(props: Props, ctx: SetupContext) {
    const classes = computed(() => `carousel-control fa fa-2x fa-chevron-${props.dir}`);

    const click = () => {
      ctx.emit('change-image', props.dir === 'left' ? -1 : 1);
    };

    return {
      classes,
      click,
    };
  },
};
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
