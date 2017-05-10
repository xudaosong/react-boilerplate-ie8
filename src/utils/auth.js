import Sha from 'nd-sha'
import moment from 'moment'
import storage from './session'

const TOKENS_KEY = 'LOGIN_TOKENS'
const USER_KEY = 'LOGIN_USER'
const IM_AUTH = 'IM_AUTH'

let tokensObj, authObj, ImAuthObj

function nonce(diff) {
  function rnd(min, max) {
    const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    let range = max ? max - min : min
    let str = ''
    let length = arr.length - 1

    for (let i = 0; i < range; i++) {
      str += arr[Math.round(Math.random() * length)]
    }

    return str
  }

  return new Date().getTime() + (diff || 0) + ':' + rnd(8)
}

export default {
  isLogin: function () {
    return this.getTokens() && this.getImAuth() && this.getAuth()
  },

  /**
   * Check the specific user's permission, based on roles.
   *
   * @param availableRoles {Array} 可以访问的角色列表
   * @returns {boolean}
   */
  hasAuth: function (availableRoles) {
    // 未登录，或登录失效
    if (!this.isLogin()) {
      return false
    }

    const auth = this.getAuth()
    const userRoles = auth.roles || []

    if (!auth) {
      return false
    }

    if (!availableRoles || availableRoles.length === 0) {
      return true
    }

    return availableRoles.some(role => userRoles.indexOf(role) !== -1)
  },

  setAuth: function (auth) {
    authObj = auth

    if (auth === null) {
      storage.remove(USER_KEY)
    } else {
      storage.set(USER_KEY, auth)
    }
  },

  getAuth: function () {
    let auth = authObj

    if (!auth) {
      auth = storage.get(USER_KEY)
      if (auth) {
        authObj = auth
      }
    }

    if (auth) {
      const args = Array.prototype.slice.call(arguments)
      let key

      while ((key = args.shift()) && auth) {
        auth = auth[key]
      }
    }

    return auth
  },

  getTokens: function (key) {
    let tokens = tokensObj

    if (!tokens) {
      // 本地存储
      tokens = storage.get(TOKENS_KEY)
    }

    if (tokens) {
      // 失效判断
      if (moment(tokens['expires_at']) <= moment()) {
        this.setTokens(tokens = null)
      }
    }

    if (tokens) {
      tokensObj = tokens
    }

    if (key && tokens) {
      return tokens[key]
    }

    return tokens
  },

  /**
   * 设置或清除 tokens
   * @param {object} tokens token值
   */
  setTokens: function (tokens) {
    tokensObj = tokens

    if (tokens === null) {
      storage.remove(TOKENS_KEY)
    } else {
      tokens.diff = new Date(this.getTokens('server_time')) - new Date()
      storage.set(TOKENS_KEY, tokens)
    }
  },

  getImAuth: function () {
    let auth = ImAuthObj

    if (!auth) {
      auth = storage.get(IM_AUTH)
      if (auth) {
        ImAuthObj = auth
      }
    }

    if (auth) {
      const args = Array.prototype.slice.call(arguments)
      let key

      while ((key = args.shift()) && auth) {
        auth = auth[key]
      }
    }

    return auth
  },

  /**
   * 设置或清除 tokens
   * @param {object} tokens token值
   */
  setImAuth: function (imAuth) {
    ImAuthObj = imAuth

    if (imAuth === null) {
      storage.remove(IM_AUTH)
    } else {
      storage.set(IM_AUTH, imAuth)
    }
  },

  destroy: function () {
    this.setTokens(null)
    this.setImAuth(null)
    this.setAuth(null)
  },

  getAccessToken: function () {
    return this.getTokens('access_token')
  },

  getAuthentization: function (method, url, host) {
    const nonce = this._getNonce()

    return ['MAC id="' + this.getAccessToken() + '"',
      'nonce="' + nonce + '"',
      'mac="' + this._getMac(nonce, method, url, host) + '"'
    ].join(',')
  },

  _getMacContent: function (nonce, method, url, host) {
    return [nonce, method, url, host, ''].join('\n')
  },

  _getMac: function (nonce, method, url, host, macKey) {
    macKey = macKey || this.getTokens('mac_key')

    return new Sha(this._getMacContent(nonce, method, url, host), 'TEXT')
      .getHMAC(macKey, 'TEXT', 'SHA-256', 'B64')
  },

  _getNonce: function () {
    return nonce(this.getTokens('diff'))
  }
}
