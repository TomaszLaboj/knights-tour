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

  const handleSquareClick = (clickedSquare: SquareElement) => {
    if (clickedSquare.moveCounter === 0 && clickedSquare.legalMove === true) {
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

  const handleResetBoard = () => {
    squaresData = createArray();
    setBoard([...squaresData]);
  };
  const squaresElementArray: JSX.Element[] = [];

  for (const element of board) {
    squaresElementArray.push(
      <OneSquare
        key={element.id}
        handleSquareClick={handleSquareClick}
        square={element}
      />
    );
  }

  return (
    <>
      <header className="header">
        KNIGHT'S TOUR
        <p className="description">
          Click on any square on the board to start the game.<br></br>
          You need to visit all squares on the board but each square can be
          visited only once. Valid moves are shown as green circle. You don't
          have to know chess to try to solve this puzzle. It's possible to solve
          this board - make 64 moves.<br></br>
          Good luck!
        </p>
      </header>
      <nav>
        <button className="reset" onClick={handleResetBoard}>
          Reset board
        </button>
        <br />
        <button className="undo">Undo move</button>
      </nav>
      <aside className="description"></aside>
      <div className="board">{squaresElementArray}</div>
      {!isMoveLegal && <p className="description">Illegal move!</p>}
      <footer className="footer">Developed by Tomasz 2023 - 2025</footer>
    </>
  );
}

export default App;
