import { useRecoilValue } from "recoil";
import { boardsState } from "../atoms";
import { IBoard } from "../interfaces";
import { Board } from "../styles/Boards";
import CreateToDo from "./CreateToDo";

function Boards() {
  const boards = useRecoilValue(boardsState);

  return (
    <>
      {boards.map((board: IBoard) => (
        <Board>
          <h1>{board.board}</h1>
          {/* ToDo : CreateToDo should be customized for each Board */}
          <CreateToDo />
        </Board>
      ))}
    </>
  );
}
export default Boards;
