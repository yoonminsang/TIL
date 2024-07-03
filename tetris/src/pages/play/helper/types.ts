type BlockShape = boolean[][];
export type BlockType = 'i' | 'o' | 'l' | 'j' | 't' | 's' | 'z';
export interface Block {
  type: BlockType;
  shape: BlockShape;
}

export type CellType = BlockType | 'shadow' | 'disabled' | null;
export type Cell = { type: CellType };
export type Table = Cell[][];

export type Position = { row: number; col: number };
