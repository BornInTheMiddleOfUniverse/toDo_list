import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../../../atoms";
import { IForm } from "../../../interfaces";
import { CreateBoardInputBox } from "../../../styles/MainArea";

function CreateBoard() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setToDos = useSetRecoilState(toDoState);

  const handleValid = ({ board }: IForm) => {
    console.log("Adding a Board", board);

    setToDos((oldToDos: any) => {
      const newToDos = {
        //should board in the [board] be String?
        ...oldToDos, [board] : []
      };
      localStorage.setItem("BOARDS", JSON.stringify(newToDos));

      return newToDos;
    });

    setValue("board", "");
  };

  return (
    <CreateBoardInputBox>
      <form onSubmit={handleSubmit(handleValid)}>
        <input {...register("board")} placeholder="Create new board" />
        <button>+</button>
      </form>
    </CreateBoardInputBox>
  );
}

export default CreateBoard;
