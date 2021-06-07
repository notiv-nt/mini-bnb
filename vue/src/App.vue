<template>
  <div v-if="isLoading" style="text-align: center">Loading...</div>

  <template v-else>
    <Header />
    <router-view />
    <Footer />
  </template>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },

  setup() {
    const isLoading = ref(true);
    const { dispatch } = useStore();

    onMounted(async () => {
      await dispatch('getMe');
      isLoading.value = false;
    });

    return {
      isLoading,
    };
  },
};
</script>

<style lang="scss"></style>
