import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../../../../atoms";
import { IBoardProps, IForm } from "../../../../interfaces";
import { AddToDo } from "../../../../styles/Boards";



function CreateToDo({toDos, boardTitle} : IBoardProps){
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setToDos = useSetRecoilState(toDoState);

  const handleValid = ({ toDo }: IForm) => {

    const newToDo = {
      id: Date.now(),
      text: toDo,
    };

    setToDos((allBoards: any) => {  
      const newToDos = {
        ...allBoards,
        [boardTitle]: [newToDo, ...allBoards[boardTitle]],
      };
      localStorage.setItem("BOARDS", JSON.stringify(newToDos));
      toDos = newToDos;

      console.log("Added a toDo", toDo);
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
