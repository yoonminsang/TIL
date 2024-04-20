import { Button } from '@/components/ui/button';

interface RankingPageProps {
  onChangeStartPage: VoidFunction;
}

export default function RankingPage({ onChangeStartPage }: RankingPageProps) {
  return (
    <div>
      <h1 className="text-xl">RankingPage</h1>
      <Button onClick={onChangeStartPage}>Go Start Page</Button>
    </div>
  );
}
