import { Draggable } from "react-beautiful-dnd";
import { IDraggableCardProps } from "../interfaces";
import tw from "tailwind-styled-components";
import React from "react";

export const Card = tw.div`bg-pink-300 w-full relative mb-3 h-8`;

function DraggableCard({ text, id, index }: IDraggableCardProps) {
  return (
    <Draggable draggableId={id + ""} index={index}>
      {(magic, snapshot) => (
        <Card
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {text}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
