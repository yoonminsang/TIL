import { useInterval } from '@/hooks/useInterval';
import { useEffect, useState } from 'react';
import RootLayout from '../layout';

interface StageIntroPageProps {
  stage: number;
  onChangePlayPage: VoidFunction;
}

export default function StageIntroPage({ stage, onChangePlayPage }: StageIntroPageProps) {
  const [count, setCount] = useState<number>(3);

  useInterval(() => {
    setCount((count) => count - 1);
  }, 1000);

  useEffect(() => {
    if (count <= 0) {
      onChangePlayPage();
    }
  }, [count, onChangePlayPage]);

  return (
    <RootLayout>
      <div className="flex flex-col items-center justify-center gap-[16px]">
        <h1 className="text-2xl">StageIntroPage</h1>
        <div className="flex flex-col items-center justify-center">
          <div className="text-l">Current Stage: {stage}</div>
          <div className="text-l animate-ping p-[16px]">{count}</div>
        </div>
      </div>
    </RootLayout>
  );
}
