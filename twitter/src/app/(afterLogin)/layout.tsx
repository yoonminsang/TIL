import { ReactNode } from 'react';

export default function AfterLoginLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>after login layout</h1>
      {children}
    </div>
  );
}
