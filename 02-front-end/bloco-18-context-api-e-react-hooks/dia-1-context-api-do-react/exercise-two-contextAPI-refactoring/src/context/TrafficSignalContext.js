import React, { Component, createContext } from 'react'

const TrafficSignalContext = createContext();

export class TrafficSignalProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signal: 'red',
    }
    this.changeSignal = this.changeSignal.bind(this);
  }

  changeSignal(color) {
    this.setState({
      signalColor: color,
    });
  }

  render() {
    const { changeSignal } = this;
    const { children } = this.props;
    return (
      <TrafficSignalContext.Provider value={ { ...this.state, changeSignal } }>
        { children }
      </TrafficSignalContext.Provider>
    )
  }
}

export default TrafficSignalContext;
