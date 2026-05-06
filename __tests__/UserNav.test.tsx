import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import UserNav from '@/app/ui/UserNav';
import { useSession } from 'next-auth/react';

// Mock next-auth/react
jest.mock('next-auth/react', () => ({
  useSession: jest.fn(),
  signOut: jest.fn(),
}));

// Mock ant design to avoid complex rendering issues in Jest
jest.mock('antd', () => {
  const actual = jest.requireActual('antd');
  return {
    ...actual,
    Dropdown: ({ children }: { children: React.ReactNode }) => <div data-testid="dropdown-mock">{children}</div>,
  };
});

describe('UserNav Component', () => {
  it('renders loading state', () => {
    (useSession as jest.Mock).mockReturnValue({ status: 'loading' });
    const { container } = render(<UserNav />);
    expect(container.firstChild).toHaveStyle({ animation: 'pulse 2s ease-in-out infinite' });
  });

  it('renders sign in button when unauthenticated', () => {
    (useSession as jest.Mock).mockReturnValue({ data: null, status: 'unauthenticated' });
    render(<UserNav />);
    expect(screen.getByText('Sign In')).toBeInTheDocument();
  });

  it('renders user info when authenticated', () => {
    (useSession as jest.Mock).mockReturnValue({
      data: { user: { name: 'Test User', email: 'test@example.com' } },
      status: 'authenticated'
    });
    render(<UserNav />);
    expect(screen.getByText('Test User')).toBeInTheDocument();
    expect(screen.getByTestId('dropdown-mock')).toBeInTheDocument();
  });
});
