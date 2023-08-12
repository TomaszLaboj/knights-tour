import { SquareElement } from "../components/OneSquare";
const legalMoveImg = "🟢";



export function updateLegalMoves(
    row: number,
    column: number,
    squaresData: SquareElement[]
  ): SquareElement[] {
    for (const square of squaresData) {
      if (square.row === row - 2 && square.column === column - 1) {
        if (square.moveCounter === 0) {
          square.legalMove = true;
          square.piece = legalMoveImg;
        }
      }
      if (square.row === row - 2 && square.column === column + 1) {
        if (square.moveCounter === 0) {
          square.legalMove = true;
          square.piece = legalMoveImg;
        }
      }
      if (square.row === row - 1 && square.column === column - 2) {
        if (square.moveCounter === 0) {
          square.legalMove = true;
          square.piece = legalMoveImg;
        }
      }
      if (square.row === row - 1 && square.column === column + 2) {
        if (square.moveCounter === 0) {
          square.legalMove = true;
          square.piece = legalMoveImg;
        }
      }
      if (square.row === row + 1 && square.column === column - 2) {
        if (square.moveCounter === 0) {
          square.legalMove = true;
          square.piece = legalMoveImg;
        }
      }
      if (square.row === row + 1 && square.column === column + 2) {
        if (square.moveCounter === 0) {
          square.legalMove = true;
          square.piece = legalMoveImg;
        }
      }
      if (square.row === row + 2 && square.column === column - 1) {
        if (square.moveCounter === 0) {
          square.legalMove = true;
          square.piece = legalMoveImg;
        }
      }
      if (square.row === row + 2 && square.column === column + 1) {
        if (square.moveCounter === 0) {
          square.legalMove = true;
          square.piece = legalMoveImg;
        }
      }
    }
  
    return squaresData;
  }
  