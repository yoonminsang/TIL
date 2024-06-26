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
        {/* NOTE: state를 clear했기 때문에 stage가 이미 +1되어있다. 그렇기 때문에 이전 stage 데이터를 보여줘야함 */}
        <div className="text-l">{stage - 1} Stage Clear</div>
        <Button onClick={onChangeStageIntroPage}>Go Stage Intro Page</Button>
      </div>
    </RootLayout>
  );
}
