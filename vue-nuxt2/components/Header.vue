<template>
  <header class="header">
    <router-link to="/">
      <img class="header-icon" src="@/assets/logo.png" alt="vuebnb" width="32" height="34" />
      <h1>vuebnb</h1>
    </router-link>

    <ul class="links">
      <template v-if="isAuthenticated">
        <li>
          <span>{{ user.name }}</span>
        </li>

        <li>
          <router-link to="/saved">Saved</router-link>
        </li>

        <li>
          <a @click="logout">Log Out</a>
        </li>
      </template>

      <li v-else>
        <router-link to="/login">Log In</router-link>
      </li>
    </ul>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import User from '~/interfaces/User';

export default Vue.extend({
  computed: {
    isAuthenticated(): boolean {
      return this.$store.getters.isAuthenticated;
    },

    user(): User {
      return this.$store.getters.user;
    },
  },

  methods: {
    logout(): void {
      this.$store.dispatch('logout');
    },
  },
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e4e4e4;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);

  &-icon {
    height: 34px;
    margin: 16px 12px 16px 24px;
    display: inline-block;
  }

  a {
    display: flex;
    align-items: center;
  }
}

h1 {
  color: #4fc08d;
  display: inline-block;
  font-size: 28px;
  margin: 0;
}

ul {
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0 24px 0 0;
  margin: 0;

  @media (max-width: 373px) {
    padding-right: 12px;
  }

  li {
    padding: 10px 10px 0 10px;
    line-height: 1;
    color: inherit;
    font-size: 13px;
    padding-bottom: 8px;
    letter-spacing: 0.5px;
  }

  a:hover {
    color: #09f;
    text-decoration: underline;
  }
}
</style>
