import { ReactNode } from 'react';

export default function BeforeLoginLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>before login layout</h1>
      {children}
    </div>
  );
}
