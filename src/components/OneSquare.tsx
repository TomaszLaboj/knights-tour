export interface SquareElement {
  id: number;
  row: number;
  column: number;
  moveCounter: number;
  piece: string;
  legalMove: boolean;
}

interface SquareProps {
  square: SquareElement;
  handleSquareClick: (square: SquareElement) => void;
}

export function OneSquare(props: SquareProps) {
  return (
    <div
      className={
        (props.square.row + props.square.column) % 2 === 0 ? "white" : "black"
      }
      onClick={() => props.handleSquareClick(props.square)}
      key={props.square.id}
    >
      <div className="piece">{props.square.piece}</div>
      <div className="counter">
        {props.square.moveCounter === 0 ? "" : props.square.moveCounter}
      </div>
    </div>
  );
}
