<template>
  <div id="app">
    <layout>
      <router-view/>
    </layout>
  </div>
</template>

<script>

import Layout from './layots/Layout'

export default {
  name: 'App',
  components: {Layout}
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
