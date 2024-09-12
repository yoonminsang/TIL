import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth')({
  component: () => (
    <div>
      auth layout
      <Outlet />
    </div>
  ),
});
