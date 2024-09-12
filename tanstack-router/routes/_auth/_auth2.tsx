import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/_auth2')({
  component: () => <div>auth2 layout</div>,
});
