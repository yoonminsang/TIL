import { Button } from '@/components/ui/button';

interface PlayPageProps {
  onChangeStageClearPage: VoidFunction;
  onChangeStageDeadPage: VoidFunction;
}

export default function PlayPage({ onChangeStageClearPage, onChangeStageDeadPage }: PlayPageProps) {
  return (
    <div>
      <h1 className="text-xl">PlayPage</h1>
      <Button onClick={onChangeStageClearPage}>Go Stage Clear Page</Button>
      <Button onClick={onChangeStageDeadPage}>Go Stage Dead Page</Button>
    </div>
  );
}
