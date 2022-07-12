import React, { Component } from 'react'
import data from './data'
import Pokedex from './Pokedex'

class App extends Component {
  render() {
    return (
      <div>
        <Pokedex pokemons={data} />
      </div>
    )
  }
}

export default App