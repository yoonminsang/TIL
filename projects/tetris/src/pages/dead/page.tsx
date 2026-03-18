import { Button } from '@/components/ui/button';
import RootLayout from '../layout';

interface DeadPageProps {
  stage: number;
  onChangeStartPage: VoidFunction;
  onChangeRankingPage: VoidFunction;
}

export default function DeadPage({ stage, onChangeRankingPage, onChangeStartPage }: DeadPageProps) {
  return (
    <RootLayout>
      <div className="flex flex-col items-center justify-center gap-[16px]">
        <h1 className="text-2xl">DeadPage</h1>
        <div className="flex flex-col items-center justify-center gap-[8px]">
          <div className="text-l flex justify-center">You are dead in {stage} stage</div>
          <div className="flex gap-[8px]">
            <Button onClick={onChangeStartPage}>Go Start Page</Button>
            <Button onClick={onChangeRankingPage}>Go Ranking Page</Button>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
