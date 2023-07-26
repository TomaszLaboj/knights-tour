import "./app.css";
import {createArray} from "./utils/createArray"
import {OneSquare} from "./components/OneSquare";
import { SquareElement } from "./components/OneSquare";

const knight = "♞";


function App() {

  const squaresData: SquareElement[] = createArray([]);
  const Board: JSX.Element[] = [];

  for (const element of squaresData) {
    Board.push(<OneSquare square={element} />);
  }
  
  return <div className="board">{Board}</div>;
}

export default App;
