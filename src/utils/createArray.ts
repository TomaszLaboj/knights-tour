import { SquareElement } from "../components/OneSquare";

const rows: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
const columns: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

export function createArray(): SquareElement[] {
    let lastId = 0;
    const array:SquareElement[] = []
    for (const row of rows) {
      for (const col of columns) {
        array.push({
          id: col + lastId,
          row: row,
          column: col,
          moveCounter: 0,
          piece: "",
          
        });
      }
      lastId += 8;
    }
    return array;
  }