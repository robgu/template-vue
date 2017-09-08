<template>
  <div>
    <h1>{{ msg }}</h1>
    <a v-link="'/page2'">page2 link</a>
    <button @click="goPage2">page2 button</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello Vue! - page1'
    }
  },
  methods: {
    goPage2 () {
      this.$router.go({ path: '/page2' });
    }
  }
}
</script>

<style lang="less" scoped>
body {
  font-family: Helvetica, sans-serif;
}
</style>
