<template>
  <div id="app">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello Vue! - page2'
    }
  },

  vuex: {

  },

  ready() {
    // page2/:id, 通过 params 获取
    console.warn('params', this.$route.params)

    // page2?a=xx 通过 query 获取
    console.warn('query', this.$route.query)
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
