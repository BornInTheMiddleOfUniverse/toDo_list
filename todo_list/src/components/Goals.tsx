import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { GoalState } from "../atoms";
import { IForm } from "../interfaces";

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
      <h1>This Weeks Goals</h1>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("goal", {
            required: "Please write a goal.",
          })}
          placeholder="Write this week's goal here"
        />
        <button>+</button>
      </form>
    </>
  );
}

export default Goals;
