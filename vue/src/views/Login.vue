<template>
  <div class="login-container">
    <form role="form" ref="form" @submit.prevent="login">
      <div class="form-control">
        <input type="email" name="email" placeholder="Email Address" required autofocus />
      </div>

      <div class="form-control">
        <input type="password" name="password" placeholder="Password" required />
      </div>

      <div class="form-control">
        <button type="submit">Log in</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const { dispatch } = useStore();
    const router = useRouter();
    const form = ref<HTMLFormElement | undefined>();
    const login = () => {
      dispatch('login', new FormData(form.value)).then(() => {
        router.push('/');
      });
    };

    return {
      login,
      form,
    };
  },
};
</script>

<style lang="scss" scoped>
form {
  padding-top: 40px;

  @media (min-width: 744px) {
    padding-top: 80px;
  }
}

.form-control {
  margin-bottom: 1em;
}

input[type='email'],
input[type='password'],
button,
label {
  width: 100%;
  font-size: 19px !important;
  line-height: 24px;
  color: #484848;
  font-weight: 300;
  -webkit-appearance: none;
}

input {
  background-color: transparent;
  padding: 11px;
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  box-sizing: border-box;
}

button {
  background-color: #4fc08d;
  color: #fff;
  cursor: pointer;
  border: #4fc08d;
  border-radius: 4px;
  padding-top: 12px;
  padding-bottom: 12px;
}
</style>
