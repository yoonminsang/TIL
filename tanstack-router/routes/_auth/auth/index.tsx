import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/auth/')({
  component: () => <div>Hello /_auth/auth/!</div>,
});
