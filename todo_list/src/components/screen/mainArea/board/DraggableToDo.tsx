import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { IDraggableToDoProps, IToDo } from "../../../../interfaces";
import { ToDoCard } from "../../../../styles/ToDos";

function DraggableToDo({ toDoText, toDoId,index }: IDraggableToDoProps) {
  return (
    <Draggable draggableId={toDoId + ""} index={index}>
      {(magic, snapshot) => (
        <ToDoCard
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDoText}
        </ToDoCard>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableToDo);
