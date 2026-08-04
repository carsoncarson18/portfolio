import { render, screen } from '@testing-library/react';
import About from './components/About';

test('renders the About section heading', () => {
  render(<About />);
  expect(screen.getByText(/about me/i)).toBeInTheDocument();
});
