import { Button } from '@/components/ui/button';

interface DeadPageProps {
  stage: number;
  onChangeStartPage: VoidFunction;
  onChangeRankingPage: VoidFunction;
}

export default function DeadPage({ stage, onChangeRankingPage, onChangeStartPage }: DeadPageProps) {
  return (
    <div>
      <h1 className="text-xl">DeadPage</h1>
      <div className="text-l">You are dead in {stage} stage</div>
      <Button onClick={onChangeStartPage}>Go Start Page</Button>
      <Button onClick={onChangeRankingPage}>Go Ranking Page</Button>
    </div>
  );
}
