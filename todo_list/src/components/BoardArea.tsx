import { useRecoilState, useRecoilValue } from "recoil";
import { toDoSelector, boardState, boardsState } from "../atoms";
import Boards from "./Boards";
import CreateBoard from "./CreateBoard";

function BoardArea() {
  const toDos = useRecoilValue(toDoSelector);
  const boards = useRecoilValue(boardsState);
  const [board, setBoard] = useRecoilState(boardState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setBoard(event.currentTarget.value as any);
  };

  return (
    <div className="row-span-2 bg-white">
      {/* header */}
      <div className="h-16 w-full bg-[#ffc0a9] text-white">
        <h1 className="ml-2 p-4 text-2xl">To Dos</h1>
        <CreateBoard />
      </div>

      {/* boards */}
      <div className="h-full w-full">
        <Boards />
      </div>
    </div>
  );
}

export default BoardArea;
