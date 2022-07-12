import React, { Component } from 'react';
import { CarsProvider } from './contexts/CarsContext';
import './App.css';
import Cars from './Cars';

export default class App extends Component {
  render() {
    return (
      <CarsProvider>
        <Cars />
      </CarsProvider>
    );
  }
}
