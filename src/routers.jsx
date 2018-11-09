import { Switch, Route } from 'react-router'
import React, { Component }  from 'react'
import App from './App'
import Home from '@/pages/home'

class Router extends Component {
  render() {
    return (<App>
      {/*<div>这里可以放header哦</div>*/}
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </App>)
  }
}

export default Router