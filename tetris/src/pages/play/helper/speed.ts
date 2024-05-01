export const getGameSpeed = ({
  minSpeedTime,
  maxSpeedTime,
  maxStage,
  currentStage,
}: {
  minSpeedTime: number;
  maxSpeedTime: number;
  maxStage: number;
  currentStage: number;
}) => {
  const diff = minSpeedTime - maxSpeedTime;
  const each = diff / maxStage;
  const curr = each * Math.min(currentStage - 1, maxStage);
  return minSpeedTime - curr;
};
