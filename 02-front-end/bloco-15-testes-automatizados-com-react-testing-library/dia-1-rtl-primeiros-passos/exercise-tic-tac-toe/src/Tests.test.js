import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TicTacToe from './TicTacToe';

describe("Initial game setup", () => {
  test('Whether nine houses have been rendered', () => {
    const { getByTestId } = render(<TicTacToe />);
    for (let i = 0; i <=8; i += 1) {
      expect(getByTestId(`cell_${i}`)).toBeInTheDocument();
    }
  });

  test('Start with all white spaces', () => {
    const { queryByAltText } = render(<TicTacToe />);
    expect(queryByAltText('X')).toBeNull();
    expect(queryByAltText('O')).toBeNull();
  });

  test("Start without the phrase 'Game over'", () => {
    const { queryByText } = render(<TicTacToe />);
    expect(queryByText('Fim de jogo')).toBeNull();
  });
});

describe('Behavior of each house', () => {
  test('Clicking on a house must add the symbol only in that place.', () => {
    const {getByTestId, getAllByAltText, queryByAltText} = render(<TicTacToe />);

    fireEvent.click(getByTestId('cell_0'));
    expect(getAllByAltText('X')).toHaveLength(1);
    expect(queryByAltText('O')).toBeNull();
  });

  test("The symbol needs to be changed by clicking from one square to another, 'X' to 'O', starting with the 'X'", () => {
    const {getByTestId, getAllByAltText, queryByAltText} = render(<TicTacToe />);
    fireEvent.click(getByTestId('cell_0'));
    expect(getAllByAltText('X')).toHaveLength(1);
    expect(queryByAltText('O')).toBeNull();
    fireEvent.click(getByTestId('cell_1'));
    expect(getAllByAltText('X')).toHaveLength(1);
    expect(getAllByAltText('O')).toHaveLength(1);
  });

  test('If you click on an already filled box, the symbol must remain the same', () => {
    const {getByTestId, getAllByAltText, queryByAltText} = render(<TicTacToe />);

    fireEvent.click(getByTestId('cell_0'));
    expect(getAllByAltText('X')).toHaveLength(1);
    expect(queryByAltText('O')).toBeNull();
    fireEvent.click(getByTestId('cell_0'));
    expect(getAllByAltText('X')).toHaveLength(1);
    expect(queryByAltText('O')).toBeNull();
  });

  test('The symbol of the houses need to be kept when another house is clicked', () => {
    const {getByTestId, getAllByAltText, queryByAltText} = render(<TicTacToe />);
    fireEvent.click(getByTestId('cell_0'));
    expect(getAllByAltText('X')).toHaveLength(1);
    expect(queryByAltText('O')).toBeNull();
    fireEvent.click(getByTestId('cell_1'));
    expect(getAllByAltText('X')).toHaveLength(1);
    expect(getAllByAltText('O')).toHaveLength(1);
  });

  test('The symbol cannot be changed if the square is clicked twice in a row', () => {
    const {getByTestId, getAllByAltText, queryByAltText} = render(<TicTacToe />);

    fireEvent.click(getByTestId('cell_0'));
    expect(getAllByAltText('X')).toHaveLength(1);
    expect(queryByAltText('O')).toBeNull();
    fireEvent.click(getByTestId('cell_0'));
    fireEvent.click(getByTestId('cell_0'));
    expect(getAllByAltText('X')).toHaveLength(1);
    expect(queryByAltText('O')).toBeNull();
  });
});

const winnerSymbols = ['X', 'O'];

winnerSymbols.map(winnerSymbol => {
  describe(`Winning condition for Player ${winnerSymbol}`, () => {
    const getStartOfAnotherLine = cellId => {
      if (cellId >= 0 && cellId <= 2) return 3;
      else if (cellId >= 3 && cellId <= 5) return 6;
      return 0;
    };

    const firstCellsOfLines = [0, 3, 6];
    firstCellsOfLines.map(cellId => {
      test(`Achieve victory by placing the same symbol on all squares of the line from the square ${cellId}`, () => {
        const opponentsLine = getStartOfAnotherLine(cellId);
        const {getByTestId, queryByText} = render(<TicTacToe />);

        if (winnerSymbol === 'O') {
          const cellNotRelatedToVictory = getStartOfAnotherLine(opponentsLine);
          fireEvent.click(getByTestId(`cell_${cellNotRelatedToVictory}`));
        }

        fireEvent.click(getByTestId(`cell_${cellId}`));
        fireEvent.click(getByTestId(`cell_${opponentsLine}`));
        fireEvent.click(getByTestId(`cell_${cellId + 1}`));
        fireEvent.click(getByTestId(`cell_${opponentsLine + 1}`));
        fireEvent.click(getByTestId(`cell_${cellId + 2}`));
        expect(queryByText('Fim de Jogo')).not.toBeNull();
      });

      return undefined;
    });

    const getStartOfAnotherColumn = cellId => {
      if (cellId === 0 || cellId === 3 || cellId === 6) return 1;
      else if (cellId === 1 || cellId === 4 || cellId === 7) return 2;
      return 0;
    };

    const firstCellsOfColumns = [0, 1, 2];
    firstCellsOfColumns.map(cellId => {
      test(`Achieve victory by placing the same symbol on every square of the column ${cellId}`, () => {
        const opponentsColumn = getStartOfAnotherColumn(cellId);
        const {getByTestId, queryByText} = render(<TicTacToe />);

        if (winnerSymbol === 'O') {
          const cellNotRelatedToVictory = getStartOfAnotherColumn(opponentsColumn);
          fireEvent.click(getByTestId(`cell_${cellNotRelatedToVictory}`));
        }

        fireEvent.click(getByTestId(`cell_${cellId}`));
        fireEvent.click(getByTestId(`cell_${opponentsColumn}`));
        fireEvent.click(getByTestId(`cell_${cellId + 3}`));
        fireEvent.click(getByTestId(`cell_${opponentsColumn + 3}`));
        fireEvent.click(getByTestId(`cell_${cellId + 6}`));
        expect(queryByText('Fim de Jogo')).not.toBeNull();
      });

      return undefined;
    });

    test('Achieve victory by placing the same symbol diagonally left to right (first, fifth, ninth square)', () => {
      const {getByTestId, queryByText} = render(<TicTacToe />);

      if (winnerSymbol === 'O') fireEvent.click(getByTestId('cell_5'));
      fireEvent.click(getByTestId('cell_0'));
      fireEvent.click(getByTestId('cell_2'));
      fireEvent.click(getByTestId('cell_4'));
      fireEvent.click(getByTestId('cell_3'));
      fireEvent.click(getByTestId('cell_8'));
      expect(queryByText('Fim de Jogo')).not.toBeNull();
    });

    test('Achieve victory by placing the same symbol on the right diagonal to the left (third, fifth, seventh square)', () => {
      const {getByTestId, queryByText} = render(<TicTacToe />);

      if (winnerSymbol === 'O') fireEvent.click(getByTestId('cell_8'));
      fireEvent.click(getByTestId('cell_2'));
      fireEvent.click(getByTestId('cell_0'));
      fireEvent.click(getByTestId('cell_4'));
      fireEvent.click(getByTestId('cell_3'));
      fireEvent.click(getByTestId('cell_6'));
      expect(queryByText('Fim de Jogo')).not.toBeNull();
    });
  });

  return undefined;
});
