import React, { Component } from 'react'
import Pokemon from './Pokemon'
import PropTypes from 'prop-types'


class Pokedex extends Component {
  render() {
    const pokemons = this.props.pokemons
    return (
      <div>
        {pokemons.map((pokemon) => <Pokemon pokemon={pokemon} key={pokemon.id} />)}
      </div>
    )
  }
}

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object)
}

export default Pokedex