import { render, screen } from '@testing-library/react';
import App from './App';

test('renders project links', () => {
  render(<App />);
  const projectLinkElements = screen.getAllByText(/Try It Out/i);
  expect(projectLinkElements.length).toBeGreaterThan(0);
  for (let link of projectLinkElements) {
    expect(link).toBeInTheDocument();
  }
});
