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
import Vue from 'vue';

export default Vue.extend({
  props: {
    id: {
      type: Number,
      required: true,
    },

    button: {
      type: Boolean,
    },
  },

  computed: {
    isListingSaved(): boolean {
      return this.$store.state.user?.listings.find((saved: number) => saved === this.id);
    },

    message(): string {
      return this.isListingSaved ? 'Saved' : 'Save';
    },

    classes(): object {
      return {
        fa: true,
        'fa-lg': true,
        'fa-heart': this.isListingSaved,
        'fa-heart-o': !this.isListingSaved,
      };
    },
  },

  methods: {
    toggleSaved() {
      this.$store.dispatch('toggleSaved', this.id);
    },
  },
});
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
