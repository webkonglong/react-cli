import { connect } from 'react-redux'
import { login, logout } from '@/actions/account'
import React from 'react'
import PropTypes from 'prop-types'
import Component from '@/Component'
import styles from './App.scss'

// import classs from 'classnames';

class App extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    isLogin: PropTypes.bool,
  }

  static defaultProps = {
    isLogin: null
  }

  state = {
    isLogin: this.props.isLogin
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.isLogin !== this.props.isLogin) {
      this.setState({ isLogin: nextProps.isLogin })
    }
  }

  login () {
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

  logout () {
    this.props.logout()
  }

  render() {
    return (
      <div className={styles.App}>
        <header className="App-header">
          <h1 className="xxx">Welcome to React-cli</h1>
        </header>
        <p className={styles.body}>
          <img src="./img/logo.png" alt="" />
        </p>
        <div className={styles.icons}>
          <p>icons集合</p>
          <i className="icon icon-times" />
          <i className="icon icon-times grey" />
          <i className="icon icon-times blue" />
          <i className="icon icon-times light" />
        </div>
        {!this.state.isLogin && <div className={styles.login} onClick={this.login.bind(this)}>登录</div>}
        <div>
          {this.state.isLogin && <h2 className={styles.loginSuccess}>已登录</h2>}
        </div>
        {this.state.isLogin && <div className={styles.login} onClick={this.logout.bind(this)}>退出登录</div>}
      </div>
    );
  }
}

export default connect(state => ({
  isLogin: state.account.isLogin
}), {
  login, logout
})(App)
