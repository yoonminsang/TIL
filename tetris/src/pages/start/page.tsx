import { Button } from '@/components/ui/button';

interface StartPageProps {
  onChangeStageIntroPage: VoidFunction;
  onChangeRankingPage: VoidFunction;
}

export default function StartPage({ onChangeRankingPage, onChangeStageIntroPage }: StartPageProps) {
  return (
    <div>
      <h1 className="text-xl">StartPage</h1>
      <Button onClick={onChangeStageIntroPage}>Game Start</Button>
      <Button onClick={onChangeRankingPage}>Go Ranking Page</Button>
    </div>
  );
}
