import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PersonalForm from './pages/PersonalForm';
import ProfessionalForm from './pages/ProfessionalForm';
import FormDataDisplay from './pages/FormDataDisplay';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Switch>
          <Route exact path="/" component={ PersonalForm } />
          <Route exact path="/professionalForm" component={ ProfessionalForm } />
          <Route exact path="/formDisplay" component={ FormDataDisplay } />
        </Switch>
      </div>
    );
  }
}
export default App;
