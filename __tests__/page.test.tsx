import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '@/app/page';

describe('Home Page', () => {
  it('renders a heading', () => {
    render(<Page />);
    
    // Check if the heading exists (this depends on the actual content of your src/app/page.tsx)
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
