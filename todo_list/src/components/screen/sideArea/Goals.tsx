import ModalArea from "../../Modal";
import { Droppable } from "react-beautiful-dnd";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { modalState, goalState } from "../../../atoms";
import {
  AddGoal,
  GoalsArea,
  GoalsBody,
  GoalsForm,
  GoalsGrid,
  GoalsList,
} from "../../../styles/Goals";
import DraggableCard from "../../DraggableCard";
import SubtitleSvg from "../../Svg";
import { OpenGoalModalBtn } from "../../../styles/Modal";

function Goals() {
  const goals = useRecoilValue(goalState);
  const setGoalModal = useSetRecoilState(modalState);

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
                    area="goal"
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
          <OpenGoalModalBtn onClick={onClickAddGoal}>+</OpenGoalModalBtn>
        )}
      </GoalsArea>

      <ModalArea area="goal" />
    </GoalsGrid>
  );
}

export default Goals;
