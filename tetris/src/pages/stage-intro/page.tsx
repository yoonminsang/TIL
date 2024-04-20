import { Button } from '@/components/ui/button';
import { useInterval } from '@/hooks/useInterval';
import { useEffect, useState } from 'react';

interface StageIntroPageProps {
  onChangePlayPage: VoidFunction;
}

export default function StageIntroPage({ onChangePlayPage }: StageIntroPageProps) {
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
    <div>
      <h1 className="text-xl">StageIntroPage</h1>
      <div className="text-l">{count}</div>
      <Button onClick={onChangePlayPage}>Go Play Page</Button>
    </div>
  );
}
