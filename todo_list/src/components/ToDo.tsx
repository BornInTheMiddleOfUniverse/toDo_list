import { useRecoilValue, useSetRecoilState } from "recoil";
import { boardsState, toDoState } from "../atoms";
import { IToDo } from "../interfaces";

function ToDo({ text, board, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const boards = useRecoilValue(boardsState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, board: name as any };
      const newToDos = [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
      localStorage.setItem("USER_WORKS", JSON.stringify(newToDos));

      return newToDos;
    });
  };

  return (
    <li>
      <span>{text}</span>
      {boards.map((board: any) => (
        <button key={board.id} name={board.board} onClick={onClick}>
          {board.board}
        </button>
      ))}
    </li>
  );
}

export default ToDo;
