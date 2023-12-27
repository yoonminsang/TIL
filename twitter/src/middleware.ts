// https://nextjs.org/docs/app/building-your-application/routing/middleware
export { auth as middleware } from './auth';

export const config = {
  matcher: ['/compose/tweet', '/home', '/explore', '/messages', '/search'],
};
