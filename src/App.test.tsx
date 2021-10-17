import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('by default', function () {

  it('renders title', () => {
    render(<App />);
    expect(screen.getByText('Cell Game')).toBeInTheDocument();
  });

  it('should render the initial state of the game', function () {

  });

  describe('on click of a cell', function () {
    it('should activate that cell', function () {

    });
  });

  describe('on click of next generation button', function () {
    it('should evolve cells the current generation', function () {

    });
  });

  describe('on click of reset button', function () {
    it('should reset cells to initial state', function () {

    });
  });
});
