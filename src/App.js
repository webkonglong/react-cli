import React, { Component } from 'react';
import styles from './App.scss';
import classs from 'classnames';

class App extends Component {
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
      </div>
    );
  }
}

export default App;
