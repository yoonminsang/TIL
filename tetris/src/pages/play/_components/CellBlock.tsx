import { Cell } from '../helper';
import colors from 'tailwindcss/colors';
import { cn } from '@/lib/utils';

interface CellProps {
  blockType: Cell;
  hasBorder?: boolean;
}

function CellBlock({ blockType, hasBorder = true }: CellProps) {
  const style = getBlockStyle(blockType);
  return (
    <div
      className={cn('relative h-[20px] w-[20px]', hasBorder && 'border-0.5 border-gray-500')}
      style={{ backgroundColor: style.background }}
    >
      <div
        className={cn('absolute inset-0 m-0.5', hasBorder && blockType !== null && 'border border-gray-700')}
        style={{ background: style.gradient }}
      />
    </div>
  );
}

export default CellBlock;

const colorMap = {
  i: colors.red[500],
  o: colors.orange[500],
  l: colors.yellow[500],
  j: colors.green[500],
  s: colors.blue[500],
  t: colors.indigo[500],
  z: colors.purple[500],
  shadow: colors.gray[400],
  disabled: colors.gray[700],
  empty: colors.gray[900], // NOTE: null을 empty로 대체
} satisfies Record<Exclude<Cell, null> & 'empty', string>;

const getBlockStyle = (cell: Cell) => {
  const baseColor = colorMap[cell ?? 'empty'];
  return {
    background: baseColor,
    gradient: `linear-gradient(to top right, ${baseColor}, ${colors.gray[900]})`,
  };
};
