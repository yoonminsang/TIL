import PostForm from './_components/PostForm';
import TabProvider from './_components/TabProvider';
import style from './page.module.css';
import Tab from '@/app/(afterLogin)/home/_components/Tab';

export default function Home() {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm />
      </TabProvider>
    </main>
  );
}
