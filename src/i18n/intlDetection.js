// 检查浏览器是否支持intl，不支持则采用IntlPolyfill
if (global.Intl) {
  let areIntlLocalesSupported = require('./intlLocalesSupported')
  if (!areIntlLocalesSupported) {
    require.ensure([], function () {
      let IntlPolyfill = require('intl')
      require('intl/locale-data/jsonp/zh')
      require('intl/locale-data/jsonp/en')
      Intl.NumberFormat = IntlPolyfill.NumberFormat
      Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat
    }, 'intl')
  }
} else {
  require.ensure([], function () {
    global.Intl = require('intl')
    require('intl/locale-data/jsonp/zh')
    require('intl/locale-data/jsonp/en')
  }, 'intl')
}
