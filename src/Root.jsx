// @flow
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import IntlProvider from '@/components/IntlProvider'
import Routes from './routers'

type Props = {
  store: {},
  history: {}
}

export default class Root extends Component<Props> {
  render() {
    return (
      <Provider store={this.props.store}>
        <IntlProvider>
          <ConnectedRouter history={this.props.history}>
            <Routes />
          </ConnectedRouter>
        </IntlProvider>
      </Provider>
    )
  }
}
