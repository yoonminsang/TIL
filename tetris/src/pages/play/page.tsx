import { Button } from '@/components/ui/button';

interface PlayPageProps {
  onChangeStageClearPage: VoidFunction;
}

export default function PlayPage({ onChangeStageClearPage }: PlayPageProps) {
  return (
    <div>
      <h1 className="text-xl">PlayPage</h1>
      <Button onClick={onChangeStageClearPage}>Go Stage Clear Page</Button>
    </div>
  );
}
