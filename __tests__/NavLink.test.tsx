import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NavLink from '@/app/ui/NavLink';
import { usePathname } from 'next/navigation';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('NavLink Component', () => {
  it('renders the link and applies active class when paths match', () => {
    (usePathname as jest.Mock).mockReturnValue('/active-path');
    
    render(
      <NavLink href="/active-path" className="base-class" activeClassName="active-class">
        Link Text
      </NavLink>
    );

    const link = screen.getByText('Link Text');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('base-class');
    expect(link).toHaveClass('active-class');
  });

  it('does not apply active class when paths do not match', () => {
    (usePathname as jest.Mock).mockReturnValue('/other-path');
    
    render(
      <NavLink href="/active-path" className="base-class" activeClassName="active-class">
        Link Text
      </NavLink>
    );

    const link = screen.getByText('Link Text');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('base-class');
    expect(link).not.toHaveClass('active-class');
  });
});
