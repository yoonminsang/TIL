import { Table } from '../helper';
import CellBlock from './CellBlock';

interface RendererProps {
  cellList: Table;
}

function Renderer({ cellList }: RendererProps) {
  return (
    <div>
      {cellList.map((col, colIndex) => (
        <div className="flex" key={colIndex}>
          {col.map((row, rowIndex) => (
            <CellBlock blockType={row} key={rowIndex} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Renderer;
