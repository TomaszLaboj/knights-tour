import React from "react";
import {useState} from "react";
import "./app.css";

const rows: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
const columns: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
// const knight: string = "♘"

//-------------------------------------------------------------

function App(): JSX.Element {
  const SquaresData: SquareElement[] = [];
  createArray(SquaresData);
  interface SquareProps{
    square: SquareElement
  }
  const Board = (props:SquareProps) => {
    return(
      <>
    <div>{props.square.piece}</div>
    <div>{props.square.moveCounter}</div>
      </>
    )
  }

  
  
  
  
  
  
  

  return (<div className="board">
    Board
   
    </div>)
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
