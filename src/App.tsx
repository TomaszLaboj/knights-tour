import React from "react";
import { useState } from "react";
import "./app.css";

const rows: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
const columns: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
const knight = "♞";

//-------------------------------------------------------------

function App(): JSX.Element {

  const SquaresData: SquareElement[] = [];
  createArray(SquaresData);
  const [boardState, setBoardState] = useState<SquareElement[]>(SquaresData);

  //-------------------------------------------------------------
  interface SquareProps {
    square: SquareElement;

  const squaresData: SquareElement[] = [];
  createArray(squaresData);
  
  const [board, setBoard] = useState<SquareElement[]>(squaresData)
  const squaresRender: JSX.Element[] = [];
  
  // const handleMoveKnight = () => {setBoard(squaresData)}
  for (const squareElement of board) {
    squaresRender.push(<SquareElementComponent square={squareElement} />);

  }
  //-------------------------------------------------------------
  const OneSquare = (props: SquareProps) => {
    return (
      <div
        className={
          (props.square.row + props.square.column) % 2 === 0 ? "white" : "black"
        }
        onClick={() => handleMovePiece(props.square)}
        key={props.square.id}
      >
        <div>{props.square.piece}</div>
        <div>
          {props.square.moveCounter === 0 ? "" : props.square.moveCounter}
        </div>
      </div>
    );
  };
  //-------------------------------------------------------------
  const handleMovePiece = (clickedSquare: SquareElement) => {
    const indexOfClickedSquare: number = boardState.indexOf(clickedSquare);
    const tempArray: SquareElement[] = boardState;
    tempArray[indexOfClickedSquare].piece = knight;
    setBoardState([...tempArray]);
    console.log(boardState);
  };
  const board: JSX.Element[] = [];

  for (const element of boardState) {
    board.push(<OneSquare square={element} />);
  }
  return <div className="board">{board}</div>;
}

export default App;

//-------------------------------------------------------------

interface SquareElement {
  id: number;
  row: number;
  column: number;
  moveCounter: number;
  piece: string;
}
//-------------------------------------------------------------
function createArray(array: SquareElement[]): SquareElement[] {
  let lastId = 0;
  for (const row of rows) {
    for (const col of columns) {
      array.push({
        id: col + lastId,
        row: row,
        column: col,
        moveCounter: 0,
        piece: "",
      });
    }
    lastId += 8;
  }
  return array;
}
//-------------------------------------------------------------

