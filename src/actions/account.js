import ajax from 'ajax'

export const LOGIN = '/account/login'
export const LOGOUT = '/account/logout'

// 登录
export function login (data, cb) {
  return {
    types: [LOGIN],
    promise () {
      return ajax({
        url: '/api/v1/users/login-new',
        type: 'login',
        data
      }, cb, resp => {
        cb && cb(false, resp)
      })
    }
  }
}

// 退出
export function logout () {
  return {
    type: LOGOUT
  }
}
