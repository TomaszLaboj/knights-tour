import "./app.css";
import { createArray } from "./utils/createArray";
import { OneSquare,SquareElement } from "./components/OneSquare";
import { updateSquaresArray } from "./utils/updateSquaresArray";
import { useState } from "react";

function App() {
  let squaresData: SquareElement[] = createArray();
  const [board, setBoard] = useState<SquareElement[]>(squaresData);
  const [visitedSquaresCounter, setVisitedSquaresCounter] = useState(0);
  const [isMoveLegal, setIsMoveLegal] = useState<boolean>(true);

  const handleClick = (clickedSquare: SquareElement) => {
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
  const squaresElementArray: JSX.Element[] = [];

  for (const element of board) {
    squaresElementArray.push(
      <OneSquare key={element.id} handleClick={handleClick} square={element} />
    );
  }

  return (
    <>
      <header className="header">
        KNIGHT'S TOUR<br></br>5 x 5
        <p className="description">
          Click on any square on the board to start the game.<br></br>
          You need to visit all squares on the board but each square can be
          visited only once. Valid moves are shown as green circle. If you don't
          see them and you have made less than a 25 moves that means you are
          stuck and need to refresh the page to restart. <br></br>You don't have
          to know chess to try to solve this puzzle. In the 5 x 5 version you
          need to make 25 moves.<br></br>
          Good luck!
        </p>
      </header>
      <nav>
        <p>Buttons under development - not active - sorry!</p>
        <button className="reset">Reset board</button>
        <button className="undo">Undo move</button>
        {visitedSquaresCounter === 25 ? (
          <p className="description">Congratulations!</p>
        ) : (
          <p className="description">
            You have made {visitedSquaresCounter} out 25 moves.{" "}
          </p>
        )}
      </nav>
      <aside className="description"></aside>
      <div className="board">{squaresElementArray}</div>
      {!isMoveLegal && <p className="description">Illegal move!</p>}
      <footer className="footer">Developed by Tomasz 2023</footer>
    </>
  );
}

export default App;
