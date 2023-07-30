import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'test',
};

export default function TestLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2>Test Layout</h2>
      {children}
    </>
  );
}
