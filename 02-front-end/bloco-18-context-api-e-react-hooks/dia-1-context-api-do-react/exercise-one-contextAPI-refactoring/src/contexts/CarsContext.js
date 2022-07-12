import React, { Component, createContext } from 'react';

const CarsContext = createContext();

export class CarsProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      red: false,
      blue: false,
      yellow: false,
    }
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, direction) {
    this.setState({
      [car]: direction,
    });
  }

  render() {
    const { moveCar } = this;
    const { children } = this.props;
    return (
        <CarsContext.Provider value={ { ...this.state, moveCar } }>
          { children }
        </CarsContext.Provider>
    )
  }
}

export default CarsContext;
