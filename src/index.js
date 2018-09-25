import React from 'react'
import Global from 'Global'
import { render, unmountComponentAtNode } from 'react-dom'
import './theme/app.global.scss'
import 'prototypeExtend'
import Root from './Root'
import registerServiceWorker from './registerServiceWorker'
import { AppContainer } from 'react-hot-loader'

const configureStore = require('./store/configureStore')
const store = configureStore.default.configureStore()
const history = configureStore.default.history

Global.on('language.index', () => {
  unmountComponentAtNode(document.getElementById('root'))
  render(
    <AppContainer>
      <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
  )
})

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
)

registerServiceWorker()
