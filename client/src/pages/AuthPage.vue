<template>
  <div class="sign-in-page">
    <div class="sign-in-page__content">
      <ul class="sign-in-page__content__tabs-links nav nav-tabs">
        <li class="nav-item sign-in-page__content__tabs-links__item">
          <a
            class="nav-link"
            :class="{'active': mode === 'login'}"
            data-toggle="tab"
            @click="mode = 'login'"
          >
            Login
          </a>
        </li>
        <li class="nav-item sign-in-page__content__tabs-links__item">
          <a
            class="nav-link"
            :class="{'active': mode === 'register'}"
            data-toggle="tab"
            @click="mode = 'register'"
          >
            Register
          </a>
        </li>
      </ul>
      <div class="sign-in-page__content__tabs tab-content">
        <sign-in v-if="mode === 'login'" class="active"/>
        <sign-up v-if="mode === 'register'"/>
      </div>
    </div>
  </div>
</template>

<script>

import SignIn from '@/components/Auth/SignIn/SignIn'
import SignUp from '@/components/Auth/SignUp/SignUp'

export default {
  name: 'StartPage',
  components: {
    SignIn,
    SignUp
  },
  data () {
    return {
      mode: 'login'
    }
  }
}
</script>

<style lang="scss">

  @import '../../scss/mixins';

  .sign-in-page {
    @include cs-flex-center();

    &__content {
      width: 400px;

      @media only screen and (max-width: 600px) {
        max-width: 250px;
      }

      &__tabs-links {
        display: flex;
        justify-content: space-around;
        &__item {
          cursor: pointer;
        }
      }
    }
  }
</style>
