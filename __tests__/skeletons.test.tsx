import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ArticleCardSkeleton, ArticlesListSkeleton, FavoriteArticleSkeleton, ArticleDetailSkeleton } from '@/app/ui/skeletons';

describe('Skeletons', () => {
  it('renders ArticleCardSkeleton correctly', () => {
    const { container } = render(<ArticleCardSkeleton />);
    expect(container).toBeInTheDocument();
  });

  it('renders ArticlesListSkeleton correctly', () => {
    const { container } = render(<ArticlesListSkeleton />);
    expect(container).toBeInTheDocument();
  });

  it('renders FavoriteArticleSkeleton correctly', () => {
    const { container } = render(<FavoriteArticleSkeleton />);
    expect(container).toBeInTheDocument();
  });

  it('renders ArticleDetailSkeleton correctly', () => {
    const { container } = render(<ArticleDetailSkeleton />);
    expect(container).toBeInTheDocument();
  });
});

