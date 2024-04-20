import { Button } from '@/components/ui/button';

interface Props {
  onChangeStageIntroPage: VoidFunction;
}

export default function StageClearPage({ onChangeStageIntroPage }: Props) {
  return (
    <div>
      <h1 className="text-xl">StageClearPage</h1>
      <Button onClick={onChangeStageIntroPage}>Go Stage Intro Page</Button>
    </div>
  );
}
