import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { IntlProvider, addLocaleData } from 'react-intl'
import { getLocalStorage, setLocalStorage } from 'storeUtil'
import zh from 'react-intl/locale-data/zh'
import en from 'react-intl/locale-data/en'
import zhCN from '@/lang/zh-CN.json'
import enUS from '@/lang/en-US.json'

addLocaleData([...en, ...zh])

class MyIntlProvider extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.any]).isRequired
  }

  componentDidMount () {
    if (!getLocalStorage('language')) {
      setLocalStorage('language', navigator.language)
    }
  }

  render () {
    // 如果国际化语言里面有 繁体中文，那么 就需要判断简体中文和繁体中文。
    let language = (getLocalStorage('language') || navigator.language || 'en-US').split('-')
    language = ['zh', 'en'].includes(language[0]) ? language[0] : 'en'

    return (<IntlProvider
      locale={language}
      messages={{ zh: zhCN, en: enUS }[language]}
    >
      {this.props.children}
    </IntlProvider>)
  }
}

export default MyIntlProvider
