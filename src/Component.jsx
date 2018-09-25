import { Component } from 'react'
import ajax from 'ajax'

class IOComponent extends Component {
  ajax (...rest) {
    ajax(...rest)
  }
  // 这里还可以放一些全局的东西  所有页面组件都继承这个组件开发。
}

export default IOComponent
