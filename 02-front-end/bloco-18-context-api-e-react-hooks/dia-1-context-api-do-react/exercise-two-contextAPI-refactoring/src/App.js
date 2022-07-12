import React, { Component } from 'react';
import { CarsProvider } from './context/CarsContext';
import { TrafficSignalProvider } from './context/TrafficSignalContext';
import Cars from './Cars';
import TrafficSignal from './TrafficSignal';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <CarsProvider>
          <Cars />
        </CarsProvider>
        <TrafficSignalProvider>
          <TrafficSignal />
        </TrafficSignalProvider>
      </div>
    );
  }
}

export default App;
