<template>
  <div class="layout">
    <div class="layout__navbar">
      <div class="layout__navbar__logo-container">
        <img src="../assets/logo.png" class="layout__logo-container__logo"
             @click="$router.push({name: 'StartPage'})">
      </div>
      <div>
        <a class="layout__navbar__item" @click="$router.push({name: 'Companies'})">Companies</a>
        <a class="layout__navbar__item" @click="$router.push({name: 'Sign in'})">Sign in</a>
      </div>
    </div>
    <div class="layout__content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout'
}
</script>

<style lang="scss">

  @import '../../scss/variables';

  .layout {
    height: 100vh;
    background-color: $cs-layout-background;

    &__navbar {
      color: $cs-link-primary;
      margin-bottom: 60px;
      height: 7%;
      background-color: $cs-navbar-background;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 10%;
      padding-left: 10%;

      &__item {
        cursor: pointer;
        margin-left: 3rem;
        margin-right: 3rem;

        @media only screen and (max-width: 600px) {
          margin-left: 0.5rem;
          margin-right: 0.5rem;
        }
      }
    }

    &__content {
      padding-left: 15%;
      padding-right: 15%;

      @media only screen and (max-width: 600px) {
        padding-left: 7%;
        padding-right: 7%;
      }
    }

    &__logo-container {

      &__logo {
        cursor: pointer;
        width: 5rem;

        @media only screen and (max-width: 600px) {
          width: 3rem;
        }
      }
    }
  }
</style>
