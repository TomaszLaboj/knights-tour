import "./app.css";
import {createArray} from "./utils/createArray"
import {OneSquare} from "./components/OneSquare";
import { SquareElement } from "./components/OneSquare";
import { updateSquaresArray } from "./utils/updateSquaresArray";
import {useState} from "react"


function App() {

  const handleClick = (clickedSquare:SquareElement) => {console.log(clickedSquare.id+"was clicked")}
  const squaresData: SquareElement[] = createArray();
  
  const [board, setBoard] = useState<SquareElement[]>(squaresData)
  const squaresElementArray: JSX.Element[] = [];
  for (const element of board) {
    squaresElementArray.push(<OneSquare key={element.id} handleClick={handleClick} square={element} />);
  }
  
  return <div className="board" >{squaresElementArray}</div>;
}

export default App;
