import config from 'config'
export default {
  hasBridge: window.Bridge !== undefined,
  currentUser: null,
  _initUcManager: false,
  ucManager() {
    return new Promise((resolve, reject) => {
      if (this._initUcManager === false && window.ucManager === undefined) {
        this._initUcManager = true
        let oHead = document.getElementsByTagName('HEAD').item(0)
        let oScript = document.createElement('script')
        oScript.type = 'text/javascript'
        oScript.src = '//uc.101.com/ucManager.min.js'
        oScript.id = 'uc-javascript-sdk-tag'
        oScript.setAttribute('v', config.env)
        oScript.onload = () => {
          resolve(window.ucManager)
        }
        oHead.appendChild(oScript)
      } else if (window.ucManager !== undefined) {
        resolve(window.ucManager)
      }
    })
  },
  login(username, password) {
    return new Promise((resolve, reject) => {
      if (this.currentUser !== null) {
        resolve(this.currentUser)
      }
      if (this.hasBridge) {
        // TODO: 使用Bridge登录
      } else {
        // 使用ucManager登录
        this.ucManager().then((ucManager) => {
          ucManager.login(username, password).then((res) => {
            if (typeof res === 'object') { // 登录成功
              this.currentUser = res
              resolve({
                state: 200,
                data: res
              })
            } else { // 登录失败，返回原因
              reject({
                state: 500,
                message: `登录失败，原因：${res}`
              })
            }
          })
        }, () => {
          reject('登录失败')
        })
      }
    })
  },
  isLogin() {
    return new Promise((resolve, reject) => {
      if (this.hasBridge) {
        // TODO: 使用Bridge验证登录
      } else {
        this.ucManager().then((ucManager) => {
          ucManager.isLogin().then((res) => {
            resolve(res === 'true')
          }, (res) => {
            reject(res)
          })
        })
      }
    })
  },
  getMac(url, method) {
    return new Promise((resolve, reject) => {
      if (this.hasBridge) {
        const UC = window.Bridge.require('UC')
        const ret = UC.getMACContent({
          'url': url,
          'method': method
        })
        if (ret.result === true) {
          resolve({
            state: 200,
            data: {
              mac: ret.returnMessage.replace(/\\"/g, '"')
            }
          })
        } else {
          reject({
            state: 500,
            message: 'Mac获取失败'
          })
        }
      } else {
        this.ucManager().then((ucManager) => {
          ucManager.isLogin().then((res) => {
            if (res === 'true') {
              // true代表登录状态
              resolve({
                state: 200,
                data: {
                  mac: window.JsMAF.getAuthHeader(url, method)
                }
              })
            } else {
              reject({
                state: 403,
                message: 'Mac获取失败,请先登录'
              })
            }
          }, () => {
            reject({
              state: 500,
              message: 'Mac获取失败'
            })
          })
        })
      }
    })
  }
}
