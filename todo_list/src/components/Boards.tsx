import { useRecoilValue } from "recoil";
import { boardsState } from "../atoms";
import { IBoard } from "../interfaces";
import { Board, BoardHeader, BoardTitle } from "../styles/Boards";
import CreateToDo from "./CreateToDo";

function Boards() {
  const boards = useRecoilValue(boardsState);

  return (
    <>
      {boards.map((board: IBoard) => (
        <Board>
          <BoardHeader>
            <BoardTitle>{board.board}</BoardTitle>
            {/* ToDo : CreateToDo should be customized for each Board */}
            <CreateToDo />
          </BoardHeader>
        </Board>
      ))}
    </>
  );
}
export default Boards;
