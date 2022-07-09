/* eslint-disable testing-library/no-node-access */
import { render } from '@testing-library/react';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

import { Meta } from './Meta';

// Mock `next/head`: https://bradgarropy.com/blog/mocking-nextjs
jest.mock(
  'next/head',
  () =>
    function Head(props: { children: ReactNode }) {
      return <>{props.children}</>;
    }
);

describe('Meta component', () => {
  it('should have a page title,', async () => {
    const title = 'Random title';
    const description = 'Random description';
    const img = { url: '/images/og-home.jpg', alt: 'home' };

    render(<Meta title={title} description={description} images={[img]} />);

    expect(document.title).toEqual(`${title} | ${AppConfig.site_name}`);
    const metaDesc = document.querySelector(
      "meta[name='description']"
    ) as React.MetaHTMLAttributes<null>;
    const metaImg = document.querySelector(
      "meta[property='og:image']"
    ) as React.MetaHTMLAttributes<null>;
    expect(metaDesc.content).toBe(description);
    expect(metaImg.content).toBe(img.url);
  });
});
