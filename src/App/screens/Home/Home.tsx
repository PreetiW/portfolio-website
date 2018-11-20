import * as React from 'react';
import './Home.css';

import logo from '../../../logo.svg';
import BasicInfo from '../../components/BasicInfo';

class Home extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <BasicInfo name="Preeti Wadhwani" designation="Mobile Developer"/>
      </div>
    );
  }
}

export default Home;