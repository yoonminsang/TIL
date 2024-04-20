import { Button } from '@/components/ui/button';

interface StageIntroPageProps {
  onChangePlayPage: VoidFunction;
}

export default function StageIntroPage({ onChangePlayPage }: StageIntroPageProps) {
  return (
    <div>
      <h1 className="text-xl">StageIntroPage</h1>
      <Button onClick={onChangePlayPage}>Go Play Page</Button>
    </div>
  );
}
