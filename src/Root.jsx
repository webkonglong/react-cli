// @flow
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Switch, Route } from 'react-router'
import App from './App'

type Props = {
  store: {},
  history: {}
}

export default class Root extends Component<Props> {
  render () {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
          <Switch>
            <Route path="/" component={App} />
            {/*路由全部定义在这里咯*/}
          </Switch>
        </ConnectedRouter>
      </Provider>
    )
  }
}
