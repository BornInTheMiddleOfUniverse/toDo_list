import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useRecoilValue } from "recoil";
import { toDoState } from "../../../../atoms";
import { IBoardCardProps, IDraggableBoardProps } from "../../../../interfaces";
import {
  BoardCard,
  BoardBody,
  BoardHeader,
  BoardTitle,
} from "../../../../styles/Boards";
import { ToDoCards } from "../../../../styles/ToDos";
import DraggableCard from "../../../DraggableCard";
import CreateToDo from "./CreateToDo";
// import styled from "styled-components";

// const BoardCard = styled.div<IBoardCardProps>`
//   background-color: ${(props) =>
//     props.isDraggingOver
//       ? "#dfe6e9"
//       : props.isDraggingFromThis
//       ? "#b2bec3"
//       : "transparent"};
//   flex-grow: 1;
//   transition: background-color 0.3s ease-in-out;
//   padding: 20px;
// `;

function DraggableBoard({ boardTitle, index }: IDraggableBoardProps) {
  const toDos = useRecoilValue(toDoState);
  return (
    <Draggable draggableId={boardTitle} index={index}>
      {(magic, info) => (
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
              <BoardBody ref={magic.innerRef} {...magic.droppableProps}>
                <ToDoCards>
                  {toDos[boardTitle].map((toDo, index) => (
                    <DraggableCard
                      key={toDo.id}
                      id={toDo.id}
                      text={toDo.text}
                      index={index}
                    />
                  ))}
                </ToDoCards>
              </BoardBody>
            )}
          </Droppable>
        </BoardCard>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableBoard);
