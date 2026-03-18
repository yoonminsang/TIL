import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import PostForm from './_components/PostForm';
import TabProvider from './_components/TabProvider';
import style from './page.module.css';
import Tab from '@/app/(afterLogin)/home/_components/Tab';
import { getPostRecommends } from './_lib/getPostRecommends';
import PostRecommends from './_components/PostReocmmends';

export default async function HomePage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ['posts', 'recommends'], queryFn: getPostRecommends });
  const dehydratedState = dehydrate(queryClient);
  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <TabProvider>
          <Tab />
          <PostForm />
          <PostRecommends />
        </TabProvider>
      </HydrationBoundary>
    </main>
  );
}
