import { Button } from '@/components/ui/button';

interface Props {
  stage: number;
  onChangeStageIntroPage: VoidFunction;
}

export default function StageClearPage({ stage, onChangeStageIntroPage }: Props) {
  return (
    <div>
      <h1 className="text-xl">StageClearPage</h1>
      <div className="text-l">{stage} Stage Clear</div>
      <Button onClick={onChangeStageIntroPage}>Go Stage Intro Page</Button>
    </div>
  );
}
