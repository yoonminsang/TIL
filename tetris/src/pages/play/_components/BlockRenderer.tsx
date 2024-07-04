import { Table } from '../helper';
import CellBlock from './CellBlock';

interface BlockRendererProps {
  cellList: Table;
}

function BlockRenderer({ cellList }: BlockRendererProps) {
  return (
    <div>
      {cellList.map((col, colIndex) => (
        <div className="flex" key={colIndex}>
          {col.map((row, rowIndex) => (
            <CellBlock cell={row} hasBorder={false} key={rowIndex} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default BlockRenderer;
