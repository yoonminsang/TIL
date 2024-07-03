type BlockShape = boolean[][];
export type BlockType = 'i' | 'o' | 'l' | 'j' | 't' | 's' | 'z';
export interface Block {
  type: BlockType;
  shape: BlockShape;
}

// TODO: shadow, disabled도 Cell 옵션으로 넣기
export type CellType = BlockType | 'shadow' | 'disabled' | null;
export type Cell = { type: CellType };
export type Table = Cell[][];

export type Position = { row: number; col: number };
