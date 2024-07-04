import { Table } from '../helper';
import CellBlock from './CellBlock';

interface TableRendererProps {
  cellList: Table;
}

function TableRenderer({ cellList }: TableRendererProps) {
  return (
    <div>
      {cellList.map((col, colIndex) => (
        <div className="flex" key={colIndex}>
          {col.map((row, rowIndex) => (
            <CellBlock cell={row} key={rowIndex} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default TableRenderer;
