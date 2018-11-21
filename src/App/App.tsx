import * as React from 'react';
import Home from './screens/Home';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faUserCircle);

class App extends React.Component {
  public render() {
    return (
     <Home/>
    );
  }
}

export default App;
