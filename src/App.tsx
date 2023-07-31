import "./app.css";
import { createArray } from "./utils/createArray";
import { OneSquare } from "./components/OneSquare";
import { SquareElement } from "./components/OneSquare";
import { updateSquaresArray } from "./utils/updateSquaresArray";
import { useEffect, useState } from "react";

function App() {
  let squaresData: SquareElement[] = createArray();
  const [board, setBoard] = useState<SquareElement[]>(squaresData);
  const [visitedSquaresCounter, setVisitedSquaresCounter] = useState(0);
  
  const handleClick = (clickedSquare: SquareElement) => {
    
    squaresData = updateSquaresArray(clickedSquare,board, visitedSquaresCounter);
    
    setVisitedSquaresCounter(visitedSquaresCounter+1);
    setBoard([...squaresData]);
  };
  const squaresElementArray: JSX.Element[] = [];
  
  for (const element of board) {
    squaresElementArray.push(
      <OneSquare key={element.id} handleClick={handleClick} square={element} />
    );
  }

  return <div className="board">{squaresElementArray}</div>;
}

export default App;
