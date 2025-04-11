import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders app header', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  
  // Check if the company name is rendered in the header
  const companyElement = screen.getByText(/MyLogic/i);
  expect(companyElement).toBeInTheDocument();
});
