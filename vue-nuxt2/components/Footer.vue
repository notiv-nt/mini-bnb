<template>
  <div class="footer">
    <div class="footer-hr"></div>

    <div class="home-container">
      <p><strong>Vuebnb</strong>. A full-stack Vue.js and Laravel demo app.</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style lang="scss" scoped>
.footer {
  margin-bottom: 3em;

  &-icon {
    height: 23px;
    display: inline-block;
    margin-bottom: -6px;
  }

  &-hr {
    border-bottom: 1px solid #dbdbdb;
    margin: 3em 0;
  }

  p {
    font-size: 15px;
    color: #767676 !important;
    display: flex;
  }
}
</style>
