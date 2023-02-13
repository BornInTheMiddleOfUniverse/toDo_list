import { Droppable } from "react-beautiful-dnd";
import { useRecoilValue } from "recoil";
import { toDoState } from "../../../atoms";

import { DroppableBoardsArea } from "../../../styles/MainArea";
import DraggableBoard from "./board/DraggableBoard";

function Boards() {
  const toDos = useRecoilValue(toDoState);

  return (
    <>
      <Droppable droppableId="BoardsArea">
        {(magic, info) => (
          <DroppableBoardsArea ref={magic.innerRef} {...magic.droppableProps}>
            {Object.keys(toDos).map((boardTitle, index) => (
              <DraggableBoard key={boardTitle} boardTitle={boardTitle} index={index} />
            ))}
            {magic.placeholder}
          </DroppableBoardsArea>
        )}
      </Droppable>
    </>
  );
}
export default Boards;
