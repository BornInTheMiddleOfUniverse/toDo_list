import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { boardState, toDoState } from "../atoms";
import { IForm } from "../interfaces";
import { AddToDo } from "../styles/Boards";

function CreateToDo() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setToDos = useSetRecoilState(toDoState);
  const board = useRecoilValue(boardState);

  const handleValid = ({ toDo }: IForm) => {
    console.log("Adding a toDo", toDo);
    setToDos((oldToDos) => {
      const newToDos = [{ text: toDo, id: Date.now(), board }, ...oldToDos];
      localStorage.setItem("USER_WORKS", JSON.stringify(newToDos));
      return newToDos;
    });

    setValue("toDo", "");
  };

  return (
    <AddToDo>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "Please write a To Do",
          })}
          placeholder="Write a To Do here"
        />
        <button>+</button>
      </form>
    </AddToDo>
  );
}

export default CreateToDo;
