<template>
  <div class="companies-list-page">
    <div class="companies-list-page__content">
      <h1>Companies</h1>
      <table class="table table-striped table-bordered">
        <tr>
          <th>Company Name</th>
          <th>Price per hour</th>
          <th>Address of company</th>
        </tr>
        <tr v-for="(post, index) in posts" :key="post.name">
          <td>{{post.name}}</td>
          <td>{{ post.price }}</td>
          <td>{{ post.address }}</td>
          <button>Send request</button>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>

import PostsService from '@/services/CompaniesService'

export default {
  name: 'CompaniesListPage',
  data () {
    return {
      posts: []
    }
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchCompanies()
      this.posts = response.data.posts
    }
  },
  mounted () {
    this.getPosts()
  }
}
</script>

<style lang="scss">
.companies-list-page {

  &__content {

    @media only screen and (max-width: 600px) {
      max-width: 300px;
    }
  }
}
</style>
