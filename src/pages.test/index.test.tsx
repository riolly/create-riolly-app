import { render, screen } from '@testing-library/react';

import Index from '@/pages/index';

describe('Index page', () => {
  it('should render page content', () => {
    render(<Index />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Welcome to Your Lovely App! 💖');
  });

  it('should render main layout', () => {
    render(Index.getLayout(<div />));
    expect(screen.getByTestId('main-layout')).toBeInTheDocument();
  });
});
