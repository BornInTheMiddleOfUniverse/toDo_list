import { Draggable } from "react-beautiful-dnd";
import { IDraggableCardProps } from "../interfaces";
import React, { useState } from "react";
import {
  Btns,
  Card,
  DeleteBtn,
  DoneBtn,
  EditBtn,
  Text,
} from "../styles/DraggableCards";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import { useRecoilState, useSetRecoilState } from "recoil";
import { goalState, modalState, toDoState } from "../atoms";
import ModalArea from "./Modal";

function DraggableCard({
  area,
  text,
  id,
  index,
  boardTitle,
}: IDraggableCardProps) {
  const [isShown, setIsShown] = useState(false);
  const setGoals = useSetRecoilState(goalState);
  const setToDos = useSetRecoilState(toDoState);
  const setModal = useSetRecoilState(modalState);

  const handleDeleteCard = (id: number, boardTitle: string) => {
    if (area == "goal") {
      setGoals((goals) => {
        const goalsCopy = [...goals];
        const filteredGoals = goalsCopy.filter((goal) => goal.id !== id);
        localStorage.setItem("GOALS", JSON.stringify(filteredGoals));
        return filteredGoals;
      });
    }
    if (area == "todo") {
      setToDos((allBoards) => {
        const boardCopy = [...allBoards[boardTitle]];
        const filteredBoard = boardCopy.filter((todo) => todo.id !== id);
        const filteredToDos = { ...allBoards, [boardTitle]: filteredBoard };
        localStorage.setItem("BOARDS", JSON.stringify(filteredToDos));
        return filteredToDos;
      });
    }
  };

  const handleEditCard = (id: number, boardTitle: string) => {
    setModal(true);
    if (area == "goal") {
      setGoals((goals) => {
        const goalsCopy = [...goals];
        const edittingGoal = goalsCopy[index];

        // const edittedGoals = goalsCopy.splice(goalsCopy.index, 1, edittedGoal);
        return goalsCopy;
      });
    }
  };

  return (
    <>
      <Draggable draggableId={id + ""} index={index}>
        {(magic, snapshot) => (
          <Card
            ref={magic.innerRef}
            {...magic.draggableProps}
            {...magic.dragHandleProps}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            <Text> {text}</Text>
            <Btns>
              {isShown && (
                <>
                  <EditBtn
                    onClick={() => handleEditCard(id, boardTitle as string)}
                  >
                    <EditIcon />
                  </EditBtn>
                  <DoneBtn>
                    <DoneIcon />
                  </DoneBtn>
                  <DeleteBtn
                    onClick={() => handleDeleteCard(id, boardTitle as string)}
                  >
                    <ClearIcon />
                  </DeleteBtn>
                </>
              )}
            </Btns>
          </Card>
        )}
      </Draggable>

      <ModalArea area={area} />
    </>
  );
}

export default React.memo(DraggableCard);
