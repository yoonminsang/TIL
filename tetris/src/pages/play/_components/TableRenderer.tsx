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
      {cellList.map((row, rowIndex) => (
        <div className="flex" key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <CellBlock cell={cell} key={cellIndex} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default TableRenderer;
