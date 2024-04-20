import { Button } from '@/components/ui/button';

interface DeadPageProps {
  onChangeStartPage: VoidFunction;
  onChangeRankingPage: VoidFunction;
}

export default function DeadPage({ onChangeRankingPage, onChangeStartPage }: DeadPageProps) {
  return (
    <div>
      <h1 className="text-xl">DeadPage</h1>
      <Button onClick={onChangeStartPage}>Go Start Page</Button>
      <Button onClick={onChangeRankingPage}>Go Ranking page</Button>
    </div>
  );
}
