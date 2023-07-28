import { SquareElement } from "../components/OneSquare";

const knight = "♞";

export function updateSquaresArray(
    clickedSquare:SquareElement,
    squaresData:SquareElement[]
    ):SquareElement[] {
    const squareIndex:number = squaresData.indexOf(clickedSquare)
    squaresData[squareIndex].piece = knight;

    return squaresData;
  }