import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio owner name', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/Asli Sena Mercimek/i);
  expect(nameElements[0]).toBeInTheDocument();
});
