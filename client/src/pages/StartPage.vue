<template>
  <div class="start-page">
    <img src="../assets/download.jpg" class="start-page__image"/>
    <h1 class="start-page__title">WELCOME TO THE CLEANING COMPANY</h1>
    <p class="start-page__content">
      The Cleaning Company is committed to providing high quality janitorial and floor cleaning services for businesses
      in Fort Wayne and the surrounding communities. The Cleaning Company is headquartered in Fort Wayne, IN and has
      been
      in the janitorial service and floor cleaning business since 1990. With this level of experience and over 150
      employees,
      The Cleaning Company has the resources to handle customers of any size.Array
    </p>

  </div>
</template>

<script>

export default {
  name: 'StartPage'
}
</script>

<style lang="scss">
  .start-page {

    &__image {
      height: 300px;
      margin-bottom: 4rem;

      @media only screen and (max-width: 600px) {
        height: 130px;
      }
    }

    &__title {

      @media only screen and (max-width: 600px) {
        font-size: 2rem;
      }
    }

    &__content {

      @media only screen and (max-width: 600px) {
        font-size: 0.875rem;
      }
    }
  }
</style>
