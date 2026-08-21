import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the MyLogix Studio header and primary message', () => {
  window.scrollTo = jest.fn();
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  
  expect(screen.getAllByText(/MyLogix/i).length).toBeGreaterThan(0);
  expect(screen.getByRole('heading', { name: /Clear technology for real business opportunities/i })).toBeInTheDocument();
});
