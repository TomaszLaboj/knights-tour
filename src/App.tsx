import React from "react";
import {useState} from "react";
import "./app.css";

const rows: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
const columns: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
// const knight: string = "♘"

//-------------------------------------------------------------

function App(): JSX.Element {
  const squaresData: SquareElement[] = [];
  createArray(squaresData);
  
  const [board, setBoard] = useState<SquareElement[]>(squaresData)
  const squaresRender: JSX.Element[] = [];
  
  // const handleMoveKnight = () => {setBoard(squaresData)}
  for (const squareElement of board) {
    squaresRender.push(<SquareElementComponent square={squareElement} />);
  }
  

  return <div className="board">{squaresRender}</div>;
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
interface SquareElementProps {
  square: SquareElement;
}
//-------------------------------------------------------------

function SquareElementComponent(props: SquareElementProps) {
  return (
    <div
      className={
        squareEven(props.square.row, props.square.column) ? "white" : "black"
      }
      // onClick={handleMoveKnight} 
      key={props.square.id}
    >
      {props.square.piece}
      {props.square.moveCounter === 0 ? "" : props.square.moveCounter}
    </div>
  );
}
//-------------------------------------------------------------

function squareEven(row: number, column: number): boolean {
  return (row + column) % 2 === 0 ? true : false;
}
