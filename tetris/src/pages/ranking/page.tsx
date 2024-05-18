import { Button } from '@/components/ui/button';
import RootLayout from '../layout';

interface RankingPageProps {
  onChangeStartPage: VoidFunction;
}

export default function RankingPage({ onChangeStartPage }: RankingPageProps) {
  return (
    <RootLayout>
      <div className="flex flex-col items-center justify-center gap-[16px]">
        <h1 className="text-2xl">RankingPage</h1>
        <div>RankingList...</div>
        <Button onClick={onChangeStartPage}>Go Start Page</Button>
      </div>
    </RootLayout>
  );
}
