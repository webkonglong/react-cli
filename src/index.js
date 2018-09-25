import React from 'react'
import ReactDOM from 'react-dom'
import './theme/app.global.scss'
import Root from './Root'
import registerServiceWorker from './registerServiceWorker'
import { AppContainer } from 'react-hot-loader'

const configureStore = require('./store/configureStore')
const store = configureStore.default.configureStore()
const history = configureStore.default.history

ReactDOM.render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
)

registerServiceWorker()
