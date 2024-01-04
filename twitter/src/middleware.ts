import { NextResponse } from 'next/server';
import { auth } from './auth';

// https://nextjs.org/docs/app/building-your-application/routing/middleware
// export { auth as middleware } from './auth';

// 미들웨어 본연의 방법이라 이 방법을 추천한다고 함.
export async function middleware() {
  const session = await auth();
  if (!session) {
    return NextResponse.redirect('http://localhost:3000/i/flow/login');
  }
}

export const config = {
  matcher: ['/compose/tweet', '/home', '/explore', '/messages', '/search'],
};
