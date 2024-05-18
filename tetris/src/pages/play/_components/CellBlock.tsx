import { Cell } from '../helper';
import colors from 'tailwindcss/colors';

interface CellProps {
  blockType: Cell;
}

function CellBlock({ blockType }: CellProps) {
  const style = getBlockStyle(blockType);
  return (
    <div className="relative h-[20px] w-[20px] border border-gray-500" style={{ backgroundColor: style.background }}>
      <div className="absolute inset-0 m-0.5 border border-gray-700" style={{ background: style.gradient }} />
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
  empty: colors.gray[900],
} satisfies Record<string, string>;

const getBlockStyle = (cell: Cell) => {
  const baseColor = colorMap[cell ?? 'empty'];
  return {
    background: baseColor,
    gradient: `linear-gradient(to top right, ${baseColor}, ${colors.gray[900]})`,
  };
};
