import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { boardsState, boardState, toDoState } from "../atoms";
import { IForm } from "../interfaces";

function CreateBoard() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setBoards = useSetRecoilState(boardsState);

  const handleValid = ({ board }: IForm) => {
    console.log("Adding a Board", board);
    setBoards((oldBoards: any) => {
      const newBoards = [{ id: Date.now(), board: board }, ...oldBoards];
      localStorage.setItem("BOARD_TITLES", JSON.stringify(newBoards));
      return newBoards;
    });

    setValue("board", "");
  };

  return (
    <div className="absolute right-5 top-5">
      <form onSubmit={handleSubmit(handleValid)}>
        <input {...register("board")} placeholder="Create new board" />
        <button>+</button>
      </form>
    </div>
  );
}

export default CreateBoard;
