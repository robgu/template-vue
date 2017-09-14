<template>
  <div>
    <span>{{$t('title')}}</span>
    <button @click="changeLanguage">改变语言</button>
    <h1>Vuex</h1>
    <li>组织代码结构, 基本预定</li>
    <li>getter, action, state, mutation</li>
    <li>网络请求</li>
    <li>路由跳转</li>
    <li>事件绑定</li>
    <h1>{{ msg }}</h1>
    <zn-data :data="data"></zn-data>
    <input v-model="option"/>
    <span>option: {{option}}</span>
  </div>
</template>
<script>
import mixins from './mixins';

export default {
  methods: {
    i18n () {
      return {
        'en-US': require('./i18n/en-US').default,
        'zh-CN': require('./i18n/zh-CN').default,
      }
    }
  },

  mixins: [mixins],
}
</script>
<style lang="less" scoped>

</style>
