import { SquareElement } from "../components/OneSquare";

const knight = "♞";
const legalMoveImg = "🟢";

export function updateSquaresArray(
  clickedSquare: SquareElement,
  squaresData: SquareElement[],
  visitedSquaresCounter: number
): SquareElement[] {
  for (const square of squaresData) {
    if (square.piece === knight) {
      square.piece = "";
      square.moveCounter = visitedSquaresCounter;
      square.legalMove = false;
    } else {
      square.piece = "";
      square.legalMove = false;
    }
  }

  const indexOfClickedSquare: number = squaresData.indexOf(clickedSquare);
  squaresData[indexOfClickedSquare].piece = knight;
  squaresData = updateLegalMoves(
    clickedSquare.row,
    clickedSquare.column,
    squaresData
  );

  return squaresData;
}

function updateLegalMoves(
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
