import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useRecoilValue } from "recoil";
import { toDoState } from "../../../../atoms";
import { IDraggableBoardProps } from "../../../../interfaces";
import {
  BoardBody,
  BoardCard,
  BoardHeader,
  BoardTitle,
} from "../../../../styles/Boards";
import { ToDoCards } from "../../../../styles/ToDos";
import CreateToDo from "./CreateToDo";
import DraggableToDo from "./DraggableToDo";

function DraggableBoard({ boardTitle, index }: IDraggableBoardProps) {
  const toDos = useRecoilValue(toDoState);
  return (
    <Draggable draggableId={boardTitle} index={index}>
      {(magic, snapshot) => (
        <BoardCard
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}

        >
          <BoardHeader>
            <BoardTitle>{boardTitle}</BoardTitle>
            <CreateToDo boardTitle={boardTitle} toDos={toDos[boardTitle]} />
          </BoardHeader>
          <Droppable droppableId={boardTitle}>
            {(magic, info) => (
              <BoardBody ref={magic.innerRef} {...magic.droppableProps} >
                <ToDoCards>
                  {toDos[boardTitle].map((toDo, index) => (
                    <DraggableToDo
                      key={toDo.id}
                      toDoId={toDo.id}
                      toDoText={toDo.text}
                      index={index}
                    />
                  ))}
                </ToDoCards>
                {magic.placeholder}
              </BoardBody>
            )}
          </Droppable>
        </BoardCard>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableBoard);
