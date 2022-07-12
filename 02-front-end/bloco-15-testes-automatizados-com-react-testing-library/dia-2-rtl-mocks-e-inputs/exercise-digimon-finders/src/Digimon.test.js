import React from 'react';
import { render, screen } from '@testing-library/react';
import Digimon from './Digimon';

describe('Teste da tela do Digimon', () => {
const digimon = {"name":"MetalGreymon",
  "img":"https://digimon.shadowsmith.com/img/metalgreymon.jpg",
  "level":"Ultimate",
};
  it('Deverá ser mostrado o nome do digimon', () => {
    render(<Digimon digimon={ digimon } />);
    expect(screen.getByTestId('digimonName'));
  })

  it('Deverá ser mostrado o level do digimon', () => {
    render(<Digimon digimon={ digimon } />);
    expect(screen.getByTestId('digimonLevel'));
  })

  it('Deverá ser mostrada uma imagem do digimon', () => {
    render(<Digimon digimon={ digimon } />);
    expect(screen.getByAltText(digimon.name));
  });
});
