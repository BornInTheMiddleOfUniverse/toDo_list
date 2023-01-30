import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { boardsState } from "../atoms";
import { IForm } from "../interfaces";
import { CreateBoardInputBox } from "../styles/CreateBoard";

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
    <CreateBoardInputBox>
      <form onSubmit={handleSubmit(handleValid)}>
        <input {...register("board")} placeholder="Create new board" />
        <button>+</button>
      </form>
    </CreateBoardInputBox>
  );
}

export default CreateBoard;
