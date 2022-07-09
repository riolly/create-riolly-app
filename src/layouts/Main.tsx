import type { ReactNode } from 'react';

type IMainProps = {
  children: ReactNode;
};

const MainLayout = (props: IMainProps) => (
  <div className="w-full text-gray-700 antialiased" data-testid="main-layout">
    <div className="mx-auto max-w-screen-md">{props.children}</div>
  </div>
);

export { MainLayout };
