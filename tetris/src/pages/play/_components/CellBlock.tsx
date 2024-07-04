import { Cell, CellType } from '../helper';
import colors from 'tailwindcss/colors';
import { cn } from '@/lib/utils';

interface CellProps {
  cell: Cell;
  hasBorder?: boolean;
}

function CellBlock({ cell: { type, shadow }, hasBorder = true }: CellProps) {
  const { background, gradient } = getBlockColor(type, shadow);
  return (
    <div
      className={cn('relative h-[20px] w-[20px]', hasBorder && 'border-0.5 border-gray-500')}
      style={{ backgroundColor: background }}
    >
      <div
        className={cn('absolute inset-0 m-0.5', hasBorder && type !== null && 'border border-gray-700')}
        style={{ background: gradient }}
      />
    </div>
  );
}

export default CellBlock;

const COLOR_MAP_BY_TYPE = {
  i: colors.red[500],
  o: colors.orange[500],
  l: colors.yellow[500],
  j: colors.green[500],
  s: colors.blue[500],
  t: colors.indigo[500],
  z: colors.purple[500],
  disabled: colors.gray[700],
  empty: colors.gray[900], // NOTE: null을 empty로 대체
} satisfies Record<Exclude<CellType, null> & 'empty', string>;
const SHADOW_COLOR = colors.gray[400];

const getBlockColor = (type: CellType, shadow?: boolean) => {
  const baseColor = shadow ? SHADOW_COLOR : COLOR_MAP_BY_TYPE[type ?? 'empty'];
  return {
    background: baseColor,
    gradient: `linear-gradient(to top right, ${baseColor}, ${colors.gray[900]})`,
  };
};
