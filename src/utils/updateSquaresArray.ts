import { SquareElement } from "../components/OneSquare";

const knight = "♞";

export function updateSquaresArray(
  clickedSquare: SquareElement,
  squaresData: SquareElement[],
  visitedSquaresCounter: number
): SquareElement[] {
  squaresData.map((square)=>{
    if(square.piece===knight){
      square.piece="";
      square.moveCounter = visitedSquaresCounter;
    }
  })
  const indexOfClickedSquare: number = squaresData.indexOf(clickedSquare)
  squaresData[indexOfClickedSquare].piece = knight;
  console.log(squaresData)

  return squaresData;
}
