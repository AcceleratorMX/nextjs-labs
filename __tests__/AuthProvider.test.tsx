import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import AuthProvider from '@/app/ui/AuthProvider';

// Mock next-auth/react
jest.mock('next-auth/react', () => ({
  SessionProvider: ({ children }: { children: React.ReactNode }) => <div data-testid="session-provider">{children}</div>,
}));

describe('AuthProvider', () => {
  it('renders children wrapped in SessionProvider', () => {
    const { container, getByTestId } = render(
      <AuthProvider>
        <div>Test Child</div>
      </AuthProvider>
    );
    expect(getByTestId('session-provider')).toBeInTheDocument();
    expect(container).toHaveTextContent('Test Child');
  });
});
