import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";
import { IBoard, IForm } from "../interfaces";
import { AddToDo } from "../styles/Boards";

function CreateToDo({ boardTitle }: IBoard) {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setToDos = useSetRecoilState(toDoState);

  const handleValid = ({ toDo }: IForm) => {
    console.log("Adding a toDo", toDo);

    setToDos((oldToDos) => {
      const newToDos = [{ text: toDo, id: Date.now(), onBoard: boardTitle }, ...oldToDos];
      localStorage.setItem(boardTitle, JSON.stringify(newToDos));
      console.log('SETTING TODOS. newToDos:', newToDos);

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
