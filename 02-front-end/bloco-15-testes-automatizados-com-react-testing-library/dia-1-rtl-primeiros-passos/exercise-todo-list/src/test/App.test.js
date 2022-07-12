import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

describe('Testing button aplication', () => {
  it('should have a button on screen with text "Adicionar"', () => {
    const { getByText } = render(<App />)
    const addButton = getByText('Adicionar');
    expect(addButton).toBeInTheDocument();
    expect(addButton.type).toBe('button');
  });

  it('should add the user input text', () => {
    const { getByLabelText, queryByText } = render(<App />);
    const inputTask = getByLabelText('Tarefa:');
    const buttonTask = queryByText('Adicionar');
    fireEvent.change(inputTask, { target: { value: 'Task' } });
    expect(queryByText('Task')).not.toBeInTheDocument();
    fireEvent.click(buttonTask);
    expect(queryByText('Task')).toBeInTheDocument();
  });
});

describe('Testing button aplication and the input list', () => {
  it('should generate a list of tasks', () => {
    const tasks = ['Wake up', 'Eat', 'Drink'];

    const { getByLabelText, getByText } = render(<App />);
    const inputTask = getByLabelText('Tarefa:');
    const buttonTask = getByText('Adicionar'); 

    tasks.forEach((task) => {
      fireEvent.change(inputTask, { target: { value: task } });
      fireEvent.click(buttonTask);
    });

    tasks.forEach((task) => {
      return expect(getByText(task)).toBeInTheDocument();
    });
  })

  it('verifiy the Input component', () => {
    const { getByText } = render(<Item content='A string' />);
    const itemContent = getByText('A string');
    expect(itemContent).toBeInTheDocument();
  })
});
