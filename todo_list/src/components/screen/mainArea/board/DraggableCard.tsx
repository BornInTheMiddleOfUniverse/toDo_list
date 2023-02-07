import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { IDraggableToDoProps, IToDo } from "../../../../interfaces";
import { Card } from "../../../../styles/ToDos";

function DraggableToDo({ toDo, index }: IDraggableToDoProps) {
  return (
    <Draggable draggableId={toDo.id + ""} index={index}>
      {(magic, snapshot) => (
        <div
          ref={magic.innerRef}
          {...magic.draggableProps}
        >
          {toDo.text}
        </div>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableToDo);
