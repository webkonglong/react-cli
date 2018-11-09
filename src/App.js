// @flow
import React from 'react'
import Component from '@/Component'

class App extends Component {
  render () {
    return <div>
      {this.props.children}
    </div>
  }
}

export default App
