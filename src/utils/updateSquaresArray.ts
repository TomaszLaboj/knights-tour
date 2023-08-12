import { SquareElement } from "../components/OneSquare";
import { updateLegalMoves } from "./updateLegalMoves";

const knight = "♞";

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

