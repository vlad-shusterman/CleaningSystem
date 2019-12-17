<template>
  <div class="new-companies-page">
    <div class="new-companies-page__content">
      <form>
        <div class="new-companies-page__content__block">
          <label for="name">Company name</label>
          <input class="form-control" id="name" placeholder="Enter your company name"
                 v-model="company.name">
        </div>
        <div class="new-companies-page__content__block">
          <label for="price">Price per hour</label>
          <div class="new-companies-page__content__block__input-group">
            <input type="number" class="form-control" id="price" placeholder="Price per hour" v-model="company.price">
            <span class="new-companies-page__content__block__input-group__addon">$</span>
          </div>
        </div>
        <div class="new-companies-page__content__block">
          <label for="type">Address</label>
          <input class="form-control" id="type" placeholder="Enter address"
                 v-model="company.address">
        </div>
        <div class="new-companies-page__content__block">
          <button type="submit" class="btn btn-primary" @click="addPost()">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import CompaniesService from '@/services/CompaniesService'

export default {
  name: 'NewCompaniesPage',
  data () {
    return {
      company: {
        name: '',
        price: 15,
        address: ''
      }
    }
  },
  methods: {
    async addPost () {
      if (this.company.name !== '' && this.company.price !== '') {
        await CompaniesService.addNewCompany({
          name: this.company.name,
          price: this.company.price,
          address: this.company.address
        })
        // this.$router.push({name: 'companies'})
      } else {
        alert('Empty fields!')
      }
    }
  }
}
</script>

<style lang="scss">

  @import '../../scss/mixins';

  .new-companies-page {
    @include cs-flex-center();

    &__content {
      width: 400px;

      &__block {
        margin-bottom: 1rem;

        &__input-group {
          display: flex;
          position: relative;

          &__addon {
            position: absolute;
            align-items: center;
            left: 90%;
            padding-top: 0.5rem;
          }
        }
      }
    }
  }
</style>
