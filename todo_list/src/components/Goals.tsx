import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { GoalState } from "../atoms";
import { IForm } from "../interfaces";
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
    <div
      className=" bg-[#8FCEC8] fill-white	
    "
    >
      <SubtitleSvg
        text={"This Week's Goals"}
        id={"goals"}
        d={"M60,10 Q100,10 190,70 Q340,140 400,0"}
        rotation
      />

      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("goal", {
            required: "Please write a goal.",
          })}
          placeholder="Write this week's goal here"
        />
        <button>+</button>
      </form>
    </div>
  );
}

export default Goals;
