import {addLocaleData} from 'react-intl'

export default function loadLocale(locale) {
  return new Promise((resolve, reject) => {
    // 如果浏览器不支持intl，则需要加载intl-polyfill的本地化
    let need = global.IntlPolyfill && global.IntlPolyfill.__addLocaleData
    switch (locale) {
      case 'zh':
        require.ensure([], (require) => {
          need && require('intl/locale-data/jsonp/zh')
          addLocaleData(require('react-intl/locale-data/zh'))
          resolve(require('./lang/zh'))
        }, 'intl-zh')
        break
      case 'en':
        require.ensure([], (require) => {
          need && require('intl/locale-data/jsonp/en')
          addLocaleData(require('react-intl/locale-data/en'))
          resolve(require('./lang/en'))
        }, 'intl-zh')
        break
    }
  })
}
