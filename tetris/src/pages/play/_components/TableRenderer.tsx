import { cn } from '@/lib/utils';
import { Table } from '../helper';
import CellBlock from './CellBlock';
import styles from './TableRenderer.module.css';

interface TableRendererProps {
  cellList: Table;
  clearLineArr: number[];
}

function TableRenderer({ cellList, clearLineArr }: TableRendererProps) {
  return (
    <div className={cn('relative', clearLineArr.length > 0 && styles['animate-clear-line'])}>
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
