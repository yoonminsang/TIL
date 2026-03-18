import Main from '@/app/(beforeLogin)/_component/Main';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function RootPage() {
  // useSession의 서버 버전
  const session = await auth();
  if (session?.user) {
    redirect('/home');
    return null;
  }
  return <Main />;
}
