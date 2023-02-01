import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { goalsState, GoalState } from "../atoms";
import { IForm } from "../interfaces";
import {
  GoalsArea,
  GoalsBody,
  GoalsForm,
  GoalsInput,
  GoalsModal,
  GoalsModalBody,
} from "../styles/Goals";
import SubtitleSvg from "./Svg";

function Goals() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setGoals = useSetRecoilState(GoalState);

  const handleValid = ({ goal }: IForm) => {
    console.log("Adding a Goal", goal);
    setGoals((oldGoals) => {
      const newGoals = [{ text: goal, id: Date.now() }, ...oldGoals];
      localStorage.setItem("GOALS", JSON.stringify(newGoals));
      return newGoals;
    });

    setValue("goal", "");
  };

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
          <GoalsForm onSubmit={handleSubmit(handleValid)}>
            <GoalsInput
              {...register("goal", {
                required: "Please write a goal.",
              })}
              placeholder="Write this week's goal here"
            />
          </GoalsForm>
        </GoalsBody>
      </GoalsArea>
      <GoalsModal>
        <GoalsModalBody></GoalsModalBody>
      </GoalsModal>
    </>
  );
}

export default Goals;
