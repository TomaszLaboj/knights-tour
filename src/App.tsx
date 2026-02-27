import "./app.css";
import { createArray } from "./utils/createArray";
import { OneSquare } from "./components/OneSquare";
import { SquareElement } from "./components/OneSquare";
import {
  updateSquaresArray,
  updateLegalMoves,
} from "./utils/updateSquaresArray";
import { useState } from "react";

function App() {
  let squaresData: SquareElement[] = createArray();

  const [board, setBoard] = useState<SquareElement[]>(squaresData);
  const [visitedSquaresCounter, setVisitedSquaresCounter] = useState(0);
  const [isMoveLegal, setIsMoveLegal] = useState<boolean>(true);
  console.log("counter", visitedSquaresCounter, "board", board);

  const handleSquareClick = (clickedSquare: SquareElement) => {
    if (clickedSquare.moveCounter === 0 && clickedSquare.legalMove === true) {
      const newBoard = updateSquaresArray(
        clickedSquare,
        [...board],
        visitedSquaresCounter
      );
      setVisitedSquaresCounter(() => visitedSquaresCounter + 1);
      setBoard([...newBoard]);
      setIsMoveLegal(true);
    } else if (
      clickedSquare.moveCounter === visitedSquaresCounter - 1 &&
      clickedSquare.piece === ""
    ) {
      handleUndoMove(clickedSquare);
    } else if (
      (clickedSquare.moveCounter === 0 && clickedSquare.piece === "♞") ||
      (clickedSquare.moveCounter === 1 && clickedSquare.piece === "♞")
    ) {
      setBoard(createArray());
    } else {
      setIsMoveLegal(false);
    }
  };

  const handleResetBoard = () => {
    squaresData = createArray();
    setVisitedSquaresCounter(0);
    setBoard([...squaresData]);
  };

  const handleUndoMove = (prevSquare: SquareElement | undefined) => {
    console.log(prevSquare);
    console.log(board);
    if (!prevSquare) {
      return;
    }
    if (
      (prevSquare.moveCounter === 1 && prevSquare.piece === "♞") ||
      (prevSquare.moveCounter === 0 && prevSquare.piece === "♞")
    ) {
      console.log("I have it");
      setBoard(createArray());
      return;
    }
    const newBoard = board.map((square) => {
      if (square.piece === "♞" || square.piece === "🟢") {
        square.piece = "";
        square.moveCounter = 0;
        square.legalMove = true;
        return square;
      }
      if (
        square.moveCounter === visitedSquaresCounter - 1 &&
        square.piece !== "♞"
      ) {
        square.piece = "♞";
      }
      return square;
    });

    const boardWithUpdatedMoves = updateLegalMoves(
      prevSquare.row,
      prevSquare.column,
      newBoard
    );

    setBoard(boardWithUpdatedMoves);
    setVisitedSquaresCounter(() => visitedSquaresCounter - 1);

    setIsMoveLegal(true);
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
        <button
          className="undo"
          onClick={() =>
            handleUndoMove(
              board.find(
                (square) => square.moveCounter === visitedSquaresCounter - 1
              )
            )
          }
        >
          Undo move
        </button>
      </nav>
      <aside className="description"></aside>
      <div className="board">{squaresElementArray}</div>
      {!isMoveLegal && <p className="description">Illegal move!</p>}
      <footer className="footer">Developed by Tomasz 2023 - 2025</footer>
    </>
  );
}

export default App;
