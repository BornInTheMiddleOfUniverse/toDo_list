import { useEffect, useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { goalModalState, goalState } from "../../../atoms";

import { IForm } from "../../../interfaces";
import {
  AddGoal,
  GoalsArea,
  GoalsBody,
  GoalsForm,
  GoalsGrid,
  GoalsList,
  OpenGoalModal,
} from "../../../styles/Goals";
import DraggableCard from "../../DraggableCard";
import SubtitleSvg from "../../Svg";
import GoalsModal from "./GoalsModal";

function Goals() {
  const [goals] = useRecoilState(goalState);
  const setGoalModal = useSetRecoilState(goalModalState);

  const onClickAddGoal = () => {
    setGoalModal(true);
  };

  return (
    <GoalsGrid>
      <GoalsArea>
        <SubtitleSvg
          text={"This Week's Goals"}
          id={"goals"}
          d={"M60,10 Q100,10 190,70 Q340,140 400,0"}
          rotation
        />
        <Droppable droppableId="GoalsArea">
          {(magic, info) => (
            <GoalsBody ref={magic.innerRef} {...magic.droppableProps}>
              {goals.length == 0 && (
                <GoalsForm>
                  <AddGoal onClick={onClickAddGoal}>
                    <span>Write this week's goal here.</span>
                  </AddGoal>
                </GoalsForm>
              )}

              <GoalsList>
                {goals.map((goal, index) => (
                  <DraggableCard
                    key={goal.id}
                    text={goal.text}
                    id={goal.id}
                    index={index}
                  />
                ))}
              </GoalsList>
            </GoalsBody>
          )}
        </Droppable>

        {goals.length != 0 && (
          <OpenGoalModal onClick={onClickAddGoal}>+</OpenGoalModal>
        )}
      </GoalsArea>

      <GoalsModal />
    </GoalsGrid>
  );
}

export default Goals;
