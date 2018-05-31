import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './Header';
import List from './List';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    }
  }

  add = val => {
    this.setState({
      list: [...this.state.list, val]
    })
  }

  remove = index => {
    let list = [...this.state.list];
    list.splice(index, 1);
    this.setState({ list })
  }
  
  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
          <Switch>
            <Route path='/' exact render={_ =>
              <List list={this.state.list} remove={this.remove} />
            } />
            <Route path='/add' render={_ =>
              <Form add={this.add} />
            } />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
