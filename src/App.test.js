import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/flickr public photos feeds/i)
  expect(linkElement).toBeInTheDocument();
});
