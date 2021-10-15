import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import PokeList from './components/PokeList'
import PokeProfile from './components/PokeProfile'

class App extends React.Component {

  constructor() {
    super();
    this.state = { pokeData: null };
  }

  componentDidMount() {
    axios.get("https://0e381d7a3m.execute-api.us-west-2.amazonaws.com/pp", {
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
      console.log(res.data.body);
      this.setState({pokeData: res.data.body});

    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <PokeList pokeData={this.state.pokeData}/>
            </Route>
            <Route exact path="/profile/:pokemonName">
              <PokeProfile pokeData={this.state.pokeData}/>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
