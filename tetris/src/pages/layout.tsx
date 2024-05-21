import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex h-[100vh] flex-col items-center gap-[16px]">
      <header className="w-full p-[16px] text-center text-4xl">MS TETRIS</header>
      <div className="w-full flex-1">{children}</div>
      <footer className="text-l w-full p-[16px] text-center">
        develop by&nbsp;
        <a href="https://github.com/yoonminsang" target="_blank" className="text-green-700">
          yoonminsang
        </a>
      </footer>
    </div>
  );
}

export default RootLayout;
