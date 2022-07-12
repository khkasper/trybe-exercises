import React, { Component } from 'react'

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const taskList = ['Levantar', 'Correr', 'Tomar banho', 'Comer', 'Estudar'];

export default class App extends Component {
  render() {
    return (
      <ul>
        { taskList.map((task) => Task(task)) }
      </ul>
    )
  }
}