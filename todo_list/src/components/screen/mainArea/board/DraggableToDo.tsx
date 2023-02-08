import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { IDraggableToDoProps, IToDo } from "../../../../interfaces";
import { Card } from "../../../../styles/ToDos";

function DraggableToDo({ toDoText, toDoId,index }: IDraggableToDoProps) {
  return (
    <Draggable draggableId={toDoId + ""} index={index}>
      {(magic, snapshot) => (
        <Card
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDoText}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableToDo);
