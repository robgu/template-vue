<template>
  <div class="data">
    <label>{{$t('title')}}</label>
    <ul v-if="data">
      <li>{{data.date}}</li>
      <li>{{data.avg}}</li>
      <li>{{data.max}}</li>
      <li>{{data.min}}</li>
    </ul>
    <button @click="sendEvent">触发 event</button>
  </div>
</template>
<script>
export default {
  props: ['data'],
  methods: {
    i18n() {
      return {
        'en-US': require('./i18n/en-US').default,
        'zh-CN': require('./i18n/zh-CN').default,
      }
    },
    sendEvent() {
      console.warn('component send event')
      this.$emit('sayGoodbye')
    }
  },

  ready() {
    console.warn('component ready')
  }
}
</script>
<style lang="less" scoped>

</style>
