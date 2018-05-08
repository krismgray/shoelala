import React, { Component } from 'react';
import Home from './components/Home';
import MyShoes from './components/MyShoes';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/myshoes' component={MyShoes} />
          </Switch>
      </div>
    );
  }
}

export default App;
