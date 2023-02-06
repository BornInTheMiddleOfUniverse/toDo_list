import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { IDraggableCardProps } from "../interfaces";
import { Card } from "../styles/ToDos";

function DraggableCard({toDoId, toDoText, index}: IDraggableCardProps) {
  return (
      <Draggable draggableId={toDoId + ""} index={index}>
        {(magic, snapshot) => (          
          <Card ref={magic.innerRef} {...magic.draggableProps}> {toDoText}</Card>
        )}
      </Draggable>
  );
}

export default React.memo(DraggableCard);