<template>
  <div class="listing-save" @click.stop="toggleSaved">
    <button v-if="button">
      <i :class="classes"></i>
      {{ message }}
    </button>
    <i v-else :class="classes"></i>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

interface Props {
  id: number;
  button: boolean;
}

export default {
  props: {
    id: {
      type: Number,
    },

    button: {
      type: Boolean,
    },
  },

  setup(props: Props) {
    const { dispatch, state } = useStore();

    const isListingSaved = computed<boolean>(() => {
      return state.user?.listings.find((saved: number) => saved === props.id);
    });
    const message = computed(() => (isListingSaved.value ? 'Saved' : 'Save'));

    const classes = computed(() => {
      return {
        fa: true,
        'fa-lg': true,
        'fa-heart': isListingSaved.value,
        'fa-heart-o': !isListingSaved.value,
      };
    });

    const toggleSaved = () => {
      dispatch('toggleSaved', props.id);
    };

    return {
      isListingSaved,
      classes,
      message,

      toggleSaved,
    };
  },
};
</script>

<style>
.listing-save {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}

.listing-save .fa-heart-o {
  color: #ffffff;
}

.listing-save .fa-heart {
  color: #ff5a5f;
}

.listing-save i {
  padding-right: 4px;
}

.listing-save button .fa-heart-o {
  color: #808080;
}
</style>
