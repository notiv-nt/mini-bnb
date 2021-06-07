<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
      integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg=="
      crossorigin="anonymous"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default Vue.extend({
  components: {
    Header,
    Footer,
  },
});
</script>

<style lang="scss">
html {
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
  color: #484848;
  font-size: 17px;
}

html,
body {
  margin: 0;
}

button {
  text-align: center;
  vertical-align: middle;
  user-select: none;
  white-space: nowrap;
  cursor: pointer;
  display: inline-block;
  margin-bottom: 0;
}

input[type='text'] {
  -webkit-appearance: none;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: inherit;
}

.listing-container {
  margin: 0 auto;
  padding: 0 12px;

  @media (min-width: 744px) {
    width: 696px;
  }
}

.home-container {
  margin: 0 auto;
  padding: 0 25px;

  @media (min-width: 1131px) {
    width: 1080px;
  }
}

.saved-container {
  margin: 0 auto;
  padding: 0 25px;

  @media (min-width: 1131px) {
    width: 1095px;
    padding-left: 40px;
    margin-bottom: -10px;
  }
}

.login-container {
  margin: 0 auto;
  padding: 0 12px;

  @media (min-width: 374px) {
    width: 350px;
  }
}
</style>
