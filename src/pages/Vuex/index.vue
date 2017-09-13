<template>
  <div id="app">
    <h1>Vuex</h1>
    <li>组织代码结构, 基本预定</li>
    <li>getter, action, state, mutation</li>
    <li>网络请求</li>
    <li>路由跳转</li>
    <li>事件绑定</li>
    <h1>{{ msg }}</h1>
    <zn-data :data="data" ></zn-data>
    <input v-model="option" @change="changeOption" />
    <span>option: {{option}}</span>

    <button @click="goI18n">前往国际化</button>
  </div>
</template>

<script>
import vuex from './state';

export default {
  data() {
    return {
      option: 1
    }
  },
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

button {
  display: block;
}
</style>
