<template>
  <div class="sign-in">
    <form>
      <div class="sign-in__form">
        <label for="login">Email</label>
        <input class="form-control" id="login" aria-describedby="emailHelp" v-model="credentials.email">
      </div>
      <div class="sign-in__form">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" v-model="credentials.password">
      </div>
      <div class="sign-in__form">
        <button type="button" class="btn btn-primary" @click="signIn()">Sign in</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data () {
    return {
      credentials: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async signIn () {

    }
  }
}
</script>

<style lang="scss">
  .sign-in {
    &__form {
      margin-bottom: 1rem;
    }
  }
</style>
