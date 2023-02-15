import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  goalModalState,
  goalState,
  isGoalInStorageState,
  parsedLocalStorageGoals,
} from "../../../atoms";

import { IForm } from "../../../interfaces";
import {
  Goal,
  GoalsArea,
  GoalsBody,
  GoalsForm,
  GoalsInput,
  GoalsList,
  OpenGoalModal,
} from "../../../styles/Goals";
import SubtitleSvg from "../../Svg";
import GoalsModal from "./GoalsModal";

function Goals() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const [goals, setGoals] = useRecoilState(goalState);
  const [goalModal, setGoalModal] = useRecoilState(goalModalState);

  const onClickAddGoal = () => {
    setGoalModal(true);
  };
  useEffect(() => {
    if (goals.length > 0) {
      console.log("something");
    } else {
      console.log("nothing", goals.length);
    }
  }, [goals]);

  return (
    <>
      <GoalsArea>
        <SubtitleSvg
          text={"This Week's Goals"}
          id={"goals"}
          d={"M60,10 Q100,10 190,70 Q340,140 400,0"}
          rotation
        />
        <GoalsBody>
          {goals.length == 0 && (
            <GoalsForm>
              <GoalsInput
                onClick={onClickAddGoal}
                {...register("goal", {
                  required: "Please write a goal.",
                })}
                placeholder="Write this week's goal here"
              />
            </GoalsForm>
          )}

          <GoalsList>
            {goals.map((goal) => (
              <Goal key={goal.id}>{goal.text}</Goal>
            ))}
          </GoalsList>
        </GoalsBody>
        {goals.length != 0 && (
          <OpenGoalModal onClick={onClickAddGoal}>+</OpenGoalModal>
        )}
      </GoalsArea>

      <GoalsModal />
    </>
  );
}

export default Goals;
