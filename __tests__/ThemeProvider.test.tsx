import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, useTheme } from '@/app/ui/ThemeProvider';

const DummyComponent = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme-status">{theme}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

describe('ThemeProvider', () => {
  beforeEach(() => {
    // Clear localStorage and mock matchMedia
    window.localStorage.clear();
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it('provides the default theme (dark) and allows toggling', () => {
    render(
      <ThemeProvider>
        <DummyComponent />
      </ThemeProvider>
    );

    const status = screen.getByTestId('theme-status');
    expect(status).toHaveTextContent('dark'); // Default is true usually, depending on implementation

    const toggleButton = screen.getByText('Toggle Theme');
    fireEvent.click(toggleButton);

    expect(status).toHaveTextContent('light');
  });
});
