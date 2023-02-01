import { useRecoilValue, useSetRecoilState } from "recoil";
import { boardsState, toDoState } from "../atoms";
import { IToDo } from "../interfaces";
import { BoardBody } from "../styles/Boards";

function ToDos({ text, board, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const boards = useRecoilValue(boardsState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    console.log("", event);

    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, board: name as any };
      const newToDos = [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
      localStorage.setItem(board.boardTitle, JSON.stringify(newToDos));

      return newToDos;
    });
  };

  return (
    <BoardBody>
      <li>
        <span>{text}</span>
        {boards.map((board: any) => (
          <button key={board.id} name={board.board} onClick={onClick}>
            {board.board}
          </button>
        ))}
      </li>
    </BoardBody>
  );
}

export default ToDos;
