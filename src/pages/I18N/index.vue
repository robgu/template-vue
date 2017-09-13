<template>
  <div>
    <h1>{{$t('title')}}</h1>
    <h1>{{$t('hello', { name: 'li.lei'})}}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: 'i18n',
      i18n: {
        key: 'i18n',
        'zh-CN': require('./i18n/zh-CN').default,
        'en-US': require('./i18n/en-US').default,
      },
    };
  },
  vuex: {

  },

}
</script>
<style lang="less" scoped>

</style>
