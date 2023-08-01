import "./app.css";
import { createArray } from "./utils/createArray";
import { OneSquare } from "./components/OneSquare";
import { SquareElement } from "./components/OneSquare";
import { updateSquaresArray } from "./utils/updateSquaresArray";
import { useState } from "react";

function App() {
  let squaresData: SquareElement[] = createArray();
  const [board, setBoard] = useState<SquareElement[]>(squaresData);
  const [visitedSquaresCounter, setVisitedSquaresCounter] = useState(0);
  const [isMoveLegal, setIsMoveLegal] = useState<boolean>(true);

  const handleClick = (clickedSquare: SquareElement) => {
    if (clickedSquare.moveCounter === 0) {
      squaresData = updateSquaresArray(
        clickedSquare,
        board,
        visitedSquaresCounter
      );
      setVisitedSquaresCounter(visitedSquaresCounter + 1);
      setBoard([...squaresData]);
      setIsMoveLegal(true);
    } else {
      setIsMoveLegal(false);
    }
  };
  const squaresElementArray: JSX.Element[] = [];

  for (const element of board) {
    squaresElementArray.push(
      <OneSquare key={element.id} handleClick={handleClick} square={element} />
    );
  }

  return (
    <>
      <div className="board">{squaresElementArray}</div>
      {!isMoveLegal && <p>Illegal move!</p>}
    </>
  );
}

export default App;
