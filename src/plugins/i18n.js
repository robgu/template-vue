import _ from 'lodash'

export default class I18N {
  static language = localStorage.getItem('dms/language') || 'zh-CN'
  static install = (Vue, option) => {
    Vue.prototype.$t = function (path, lang, args) {
      const res = this.i18n()
      let msg = null
      if (_.isString(lang)) {
        msg = _.get(res, lang, {})
      } else {
        msg = _.get(res, I18N.language, {})
      }

      msg = _.get(msg, path)

      if (_.isEmpty(args)) {
        return msg
      } else {
        return _.template(msg, args)
      }
    }

    Vue.prototype.$locale = function (lang) {
      if (lang) {
        I18N.language = lang
        localStorage.setItem('dms/language', lang)
        location.reload()
      } else {
        return I18N.language
      }
    }
  }
}
