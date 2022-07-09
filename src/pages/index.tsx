import type { ReactElement } from 'react';

import { Meta } from '@/components/Meta';
import { MainLayout } from '@/layouts/Main';

const HomePage = () => {
  return (
    <>
      <Meta
        title="Home page"
        description="Built your lovely app faster than ever!"
        images={[
          { url: '/assets/images/home.jpg', alt: 'lovely app background' },
        ]}
      />
      <a href="https://github.com/riolly/create-riolly-app" className="m-0">
        <img
          src="/assets/images/home.jpg"
          alt="app banner"
          className="lg:pt-8"
        />
      </a>

      <div className="px-4 lg:px-0">
        <h1 className="pt-4 text-3xl">Welcome to Your Lovely App! 💖</h1>
        <p>Built your lovely app faster than ever!</p>

        <h2 className="pt-4 text-lg font-semibold">Featuring</h2>
        <ul>
          <li>
            <span role="img" aria-label="fire">
              🔥
            </span>{' '}
            <a href="https://nextjs.org" rel="nofollow">
              Next.js
            </a>{' '}
            for Static Site Generator
          </li>
          <li>
            <span role="img" aria-label="art">
              🎨
            </span>{' '}
            Integrate with{' '}
            <a href="https://tailwindcss.com" rel="nofollow">
              Tailwind CSS
            </a>
          </li>
          <li>
            <span role="img" aria-label="nail_care">
              💅
            </span>{' '}
            PostCSS for processing Tailwind CSS
          </li>
          <li>
            <span role="img" aria-label="tada">
              🎉
            </span>{' '}
            Type checking Typescript
          </li>
          <li>
            <span role="img" aria-label="pencil2">
              ✏️
            </span>{' '}
            Linter with{' '}
            <a href="https://eslint.org" rel="nofollow">
              ESLint
            </a>
          </li>
          <li>
            <span role="img" aria-label="hammer_and_wrench">
              🛠
            </span>{' '}
            Code Formatter with{' '}
            <a href="https://prettier.io" rel="nofollow">
              Prettier
            </a>
          </li>
          <li>
            <span role="img" aria-label="fox_face">
              🦊
            </span>{' '}
            Husky for Git Hooks
          </li>
          <li>
            <span role="img" aria-label="no_entry_sign">
              🚫
            </span>{' '}
            Lint-staged for running linters on Git staged files
          </li>
          <li>
            <span role="img" aria-label="no_entry_sign">
              🗂
            </span>{' '}
            VSCode configuration: Debug, Settings, Tasks and extension for
            PostCSS, ESLint, Prettier, TypeScript
          </li>
          <li>
            <span role="img" aria-label="robot">
              🤖
            </span>{' '}
            SEO metadata, JSON-LD and Open Graph tags with Next SEO
          </li>
          <li>
            <span role="img" aria-label="robot">
              ⚙️
            </span>{' '}
            <a
              href="https://www.npmjs.com/package/@next/bundle-analyzer"
              rel="nofollow"
            >
              Bundler Analyzer
            </a>
          </li>
          <li>
            <span role="img" aria-label="rainbow">
              🌈
            </span>{' '}
            Include a FREE minimalist theme
          </li>
          <li>
            <span role="img" aria-label="hundred">
              💯
            </span>{' '}
            Maximize lighthouse score
          </li>
        </ul>

        <p className="pt-4">
          Check our GitHub project for more information about{' '}
          <a href="https://github.com/riolly/create-riolly-app">
            this boilerplate
          </a>
        </p>
      </div>
    </>
  );
};

HomePage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default HomePage;
