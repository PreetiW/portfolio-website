import * as React from 'react';
import './Home.css';

import logo from '../../logo.svg';

export class Home extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Preeti Wadhwani
        </p>
      </div>
    );
  }
}

