<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <zn-data :data="data" ></zn-data>
  </div>
</template>

<script>
import vuex from './state';

export default {
  vuex,
  ready() {
    // page2/:id, 通过 params 获取
    console.warn('consumerRouteData', this.$route.consumerRouteData)
    console.warn('params', this.$route.params)

    // page2?a=xx 通过 query 获取
    console.warn('query', this.$route.query)


    this.init('arg1', 'arg2');
  }
}
</script>

<style  lang="less" scoped>
body {
  font-family: Helvetica, sans-serif;
}
</style>
