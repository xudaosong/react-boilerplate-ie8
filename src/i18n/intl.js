require('./intlDetection')
import React, {Component, PropTypes} from 'react'
import {addLocaleData, IntlProvider} from 'react-intl'
import enLocaleData from 'react-intl/locale-data/en'
import zhLocaleData from 'react-intl/locale-data/zh'
import lang from './lang'

addLocaleData(enLocaleData)
addLocaleData(zhLocaleData)
addLocaleData({locale: 'zh-CN', parentLocale: 'zh'})

export default class Intl extends Component {
  static displayName = 'Intl'
  static propTypes = {
    locale: PropTypes.string,
    children: PropTypes.object
  }
  getQueryString(name) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    let r = global.location.search.substr(1).match(reg)
    if (r != null) {
      return unescape(r[2])
    }
    return null
  }
  render() {
    let locale = this.getQueryString('locale')
    // 语言优先级
    //   1. 从 url query string 中取
    //   2. 从 this.props.locale 中拿
    //   3. 从 浏览器 navigator.languages 中拿
    //   4. 从 浏览器 UI 语言中拿

    if (!locale) {
      let languages = global.navigator.languages || [global.navigator.language || global.navigator.userLanguage || 'zh-CN']
      locale = this.props.locale || languages[0]
    }

    if (locale.indexOf('zh') >= 0) {
      locale = 'zh'
    } else {
      locale = 'en'
    }

    return (
      <IntlProvider locale={locale} key={locale} messages={lang[locale]}>
        {this.props.children}
      </IntlProvider>
    )
  }
}
