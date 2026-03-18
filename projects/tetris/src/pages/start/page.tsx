import { Button } from '@/components/ui/button';
import RootLayout from '../layout';

interface StartPageProps {
  onChangeStageIntroPage: VoidFunction;
  onChangeRankingPage: VoidFunction;
}

export default function StartPage({ onChangeRankingPage, onChangeStageIntroPage }: StartPageProps) {
  return (
    <RootLayout>
      <div className="flex flex-col items-center justify-center gap-[16px]">
        <h1 className="text-2xl">StartPage</h1>
        <div className="flex gap-[8px]">
          <Button onClick={onChangeStageIntroPage}>Game Start</Button>
          <Button onClick={onChangeRankingPage}>Go Ranking Page</Button>
        </div>
      </div>
    </RootLayout>
  );
}
