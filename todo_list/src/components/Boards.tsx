import { Droppable } from "react-beautiful-dnd";
import { useRecoilValue } from "recoil";
import { boardsState} from "../atoms";
import { IBoard } from "../interfaces";
import { Board, BoardBody, BoardHeader, BoardTitle } from "../styles/Boards";
import CreateToDo from "./CreateToDo";
import DraggableCard from "./DraggableCard";

function Boards() {
  const boards = useRecoilValue(boardsState);

  return (
    <>
      {boards.map((board: IBoard) => (
        <Board>
          <BoardHeader>
            <BoardTitle>{board.boardTitle}</BoardTitle>
            {/* ToDo : CreateToDo should be customized for each Board */}
            <CreateToDo {...board}/>
          </BoardHeader>

          <Droppable droppableId={String(board.id)}>
            {(magic, info) => (
              <BoardBody ref={magic.innerRef} {...magic.droppableProps}>
                {board.toDos.map((todo, index) => (
                  <DraggableCard key={todo.id} index={index} toDoId={todo.id} toDoText={todo.text}/>
                ))}
                {/* {magic.placeholder} */}
              </BoardBody>
            )}
          </Droppable>
        </Board>
      ))}
    </>
  );
}
export default Boards;
