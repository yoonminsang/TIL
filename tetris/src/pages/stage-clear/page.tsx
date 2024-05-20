import { Button } from '@/components/ui/button';
import RootLayout from '../layout';

interface Props {
  stage: number;
  onChangeStageIntroPage: VoidFunction;
}

export default function StageClearPage({ stage, onChangeStageIntroPage }: Props) {
  return (
    <RootLayout>
      <div className="flex flex-col items-center justify-center gap-[16px]">
        <h1 className="text-2xl">StageClearPage</h1>
        <div className="text-l">{stage} Stage Clear</div>
        <Button onClick={onChangeStageIntroPage}>Go Stage Intro Page</Button>
      </div>
    </RootLayout>
  );
}
