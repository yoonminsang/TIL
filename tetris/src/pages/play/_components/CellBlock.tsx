import { BlockType, Cell } from '../helper';

interface CellProps {
  blockType: Cell;
}

function CellBlock({ blockType }: CellProps) {
  return <div className="w-[20px] h-[20px]" style={{ backgroundColor: getBlocStyle(blockType) }} />;
}

export default CellBlock;

const getBlocStyle = (cell: BlockType | null) => {
  switch (cell) {
    case 'i':
      return 'red';
    case 'o':
      return 'orange';
    case 'l':
      return 'yellow';
    case 'j':
      return 'green';
    case 's':
      return 'blue';
    case 't':
      return 'indigo';
    case 'z':
      return 'purple';
    case null:
    default:
      return undefined;
  }
};
