import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ArticlesPage from '@/app/(main)/articles/page';

// Mock SWR
jest.mock('swr', () => ({
  __esModule: true,
  default: () => ({ data: [{ id: 1, title: 'Test Article' }], error: null, isLoading: false }),
}));

describe('ArticlesPage', () => {
  it('renders correctly', () => {
    const { container } = render(<ArticlesPage />);
    expect(container).toBeInTheDocument();
  });
});
