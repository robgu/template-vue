export default {
  data () {
    return {
      option: 1
    }
  },
  methods: {
    changeLanguage (store, arg) {
      const lang = this.$locale()
      this.$locale(lang === 'en-US' ? 'zh-CN' : 'en-US')
    }
  },

  async ready () {
    console.warn('page mixins', 'ready')
    // page2/:id, 通过 params 获取
    console.warn('consumerRouteData', this.$route.consumerRouteData)
    console.warn('params', this.$route.params)

    // page2?a=xx 通过 query 获取
    console.warn('query', this.$route.query)
  },

  async destroyed () {

  }
}
