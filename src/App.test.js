import { render, screen } from '@testing-library/react';
import App from './App';

test('navigation links target existing sections', () => {
  render(<App />);

  const sectionIds = ['trust', 'aimodel', 'features', 'testimonials', 'competitors', 'faq'];

  sectionIds.forEach((id) => {
    expect(document.getElementById(id)).toBeInTheDocument();
  });

  expect(screen.getByRole('navigation', { name: /primary/i })).toBeInTheDocument();
});
