type BlockShape = boolean[][];
export type BlockType = 'i' | 'o' | 'l' | 'j' | 't' | 's' | 'z';
export interface Block {
  type: BlockType;
  shape: BlockShape;
}

export type Cell = BlockType | null;
export type Table = Cell[][];

export type Position = { row: number; col: number };
