import { render, screen } from '@testing-library/react';

import { MainLayout } from './Main';

test('Should render layout', () => {
  render(<MainLayout>{null}</MainLayout>);
  expect(screen.getByTestId(/main-layout/i)).toBeInTheDocument();
});
