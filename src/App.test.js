import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const logo = screen.getByAltText('logo');
  expect(logo).toBeInTheDocument();
});
