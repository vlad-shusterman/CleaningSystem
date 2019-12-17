<template>
  <div class="sign-up">
    <form>
      <div class="sign-up__form">
        <label for="register-email">Email</label>
        <input type="email" class="form-control" id="register-email" v-model="credentials.email"/>
      </div>
      <label>Select your role</label>
      <select class="browser-default custom-select" v-model="credentials.role">
        <option value="client">Client</option>
        <option value="company">Company</option>
      </select>
      <div class="sign-up__form">
        <label for="register-password">Password</label>
        <input type="password" class="form-control" id="register-password" v-model="credentials.password"/>
      </div>
      <div class="sign-up__form">
        <label for="register-password-confirmation">Password confirmation</label>
        <input type="password" class="form-control" id="register-password-confirmation"
               v-model="passwordConfirm"/>
      </div>
      <div class="sign-up__form">
        <button type="button" class="btn btn-primary" @click="register()">Register</button>
      </div>
    </form>
  </div>
</template>

<script>

import UserService from '@/services/UserService'

export default {
  name: 'SignUp',
  data () {
    return {
      credentials: {
        email: '',
        password: '',
        role: 'client'
      },
      passwordConfirm: ''
    }
  },
  methods: {
    async register () {
      if (this.credentials.email !== '' && this.credentials.role !== '' && this.credentials.password !== '') {
        if (this.credentials.password === this.passwordConfirm) {
          await UserService.addNewUser({
            email: this.credentials.email,
            role: this.credentials.role,
            password: this.credentials.password
          })
          if (this.credentials.role === 'client') {
            this.$router.push({name: 'Companies'})
          } else {
            this.$router.push({name: 'NewCompany'})
          }
        } else {
          alert('Wrong password confirmation')
        }
      } else {
        alert('Empty fields')
      }
    }
  }
}
</script>

<style lang="scss">
.sign-up {
  &__form {
    margin-bottom: 1rem;
  }
}
</style>
