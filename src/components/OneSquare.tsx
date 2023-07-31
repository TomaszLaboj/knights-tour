export interface SquareElement {
  id: number;
  row: number;
  column: number;
  moveCounter: number;
  piece: string;
}

interface SquareProps {
  square: SquareElement;
  handleClick: (square: SquareElement) => void;
}

export function OneSquare(props: SquareProps) {
  return (
    <div
      className={
        (props.square.row + props.square.column) % 2 === 0 ? "white" : "black"
      }
      onClick={() => props.handleClick(props.square)}
      key={props.square.id}
    >
      <div>{props.square.piece}</div>
      <div>
        {props.square.moveCounter === 0 ? "" : props.square.moveCounter}
      </div>
    </div>
  );
}
