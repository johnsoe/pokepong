import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

import PokeButton from './components/PokeButton'

class App extends React.Component {

  constructor() {
    super();
    this.state = { pokeData: null };
  }

  componentDidMount() {
    console.log("Is this executing?")
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
        <div className="pokelist pure-g">
        { this.state.pokeData &&
          this.state.pokeData.map(pokemon =>
            <PokeButton pokemon={pokemon}/>
          )
        }
        </div>

      </div>
    )
  }
}

export default App;
