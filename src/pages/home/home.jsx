import { connect } from 'react-redux'
import { login, logout } from '@/actions/account'
import { getLocalStorage, setLocalStorage } from 'storeUtil'
import { FormattedMessage } from 'react-intl'
import React from 'react'
import PropTypes from 'prop-types'
import Component from '@/Component'
import styles from './home.scss'
import classs from 'classnames'

class Home extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    isLogin: PropTypes.bool,
  }

  static defaultProps = {
    isLogin: null
  }

  state = {
    isLogin: this.props.isLogin,
    value: getLocalStorage('language'),
    lang: [{
      icon: 'icon-zh',
      value: 'zh-CN'
    }, {
      icon: 'icon-en',
      value: 'en-US'
    }]
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLogin !== this.props.isLogin) {
      this.setState({ isLogin: nextProps.isLogin })
    }
  }

  login() {
    // 登录
    this.props.login({
      email: 'amz@amz.amz',
      password: 'amz'
    }, (resp, err) => {
      if (resp) {
        console.log(resp)
      }
      if (err) {
        console.log(err)
      }
    })
  }

  logout() {
    // 退出
    this.props.logout()
  }

  langs(data) {
    // 设置语言
    setLocalStorage('language', data.value)
    this.emit('language')
  }

  render() {
    const { value, lang } = this.state

    return (
      <div className={styles.home}>
        <header className="App-header">
          {lang.map(item => (
            <i
              key={item.icon}
              className={classs('icon', item.icon, value === item.value && 'blue', styles.lang)}
              onClick={this.langs.bind(this, item)}
            />
          ))}
        </header>
        <FormattedMessage id="s5" children={msg => (<h1 className="xxx">{msg}</h1>)} />
        <p className={styles.body}>
          <img src="./img/logo.png" alt="" />
        </p>
        <div className={styles.icons}>
          <FormattedMessage id="s4" children={msg => (<p>{msg}</p>)} />
          <i className="icon icon-times" />
          <i className="icon icon-times grey" />
          <i className="icon icon-times blue" />
          <i className="icon icon-times light" />
        </div>
        {!this.state.isLogin && <FormattedMessage id="s1"
          children={msg => (
            <div className={styles.login} onClick={this.login.bind(this)}>{msg}</div>
          )}
        />}
        <div>
          {this.state.isLogin && <FormattedMessage id="s2" children={msg => (<h2 className={styles.loginSuccess}>{msg}</h2>)} />}
        </div>
        {this.state.isLogin && <FormattedMessage id="s3" children={msg => (<div className={styles.logout} onClick={this.logout.bind(this)}>{msg}</div>)} />}
      </div>
    );
  }
}

export default connect(state => ({
  isLogin: state.account.isLogin
}), {
  login, logout
})(Home)
