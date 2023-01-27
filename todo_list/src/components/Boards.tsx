import { useRecoilValue } from "recoil";
import { boardsState } from "../atoms";
import { IBoard } from "../interfaces";
import CreateToDo from "./CreateToDo";

function Boards() {
  const boards = useRecoilValue(boardsState);

  return (
    <div className="grid auto-cols-max grid-rows-2">
      {boards.map((board: IBoard) => (
        <div className="h-10 w-full ">
          <h1>{board.board}</h1>
          {/* ToDo : CreateToDo should be customized for each Board */}
          <CreateToDo />
        </div>
      ))}
    </div>
  );
}
export default Boards;
