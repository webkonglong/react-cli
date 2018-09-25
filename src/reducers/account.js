import { LOGIN, LOGOUT } from '@/actions/account'

let defaultState = {
  isLogin: false
}

export default (state = defaultState, action: {type: string}) => {
  switch (action.type) {
    case LOGIN:
      console.log('登录中')
      return {
        ...state
      }
    case `${LOGIN}/success`:
      console.log('登录成功')
      return {
        ...state,
        isLogin: true
      }
    case `${LOGIN}/fail`:
      console.log('登录失败')
      return {
        ...state
      }
    case LOGOUT:
      console.log('退出成功')
      return {
        ...state,
        isLogin: false
      }
    default:
      return {
        ...state
      }
  }
}
