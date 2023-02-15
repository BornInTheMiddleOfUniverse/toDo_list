import MainArea from "./components/screen/mainArea/MainArea";
import SideArea from "./components/screen/sideArea/SideArea";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { BigMain } from "./styles/App";
import { toDoState } from "./atoms";
import { useRecoilState } from "recoil";

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = (info: DropResult) => {
    const { destination, source } = info;
    console.log("destination", destination, "source", source);

    if (!destination) return;

    if (destination?.droppableId === source.droppableId) {
      setToDos((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]];
        const taskObj = boardCopy[source.index];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, taskObj);
        return {
          ...allBoards,
          [source.droppableId]: boardCopy,
        };
      });
    }

    if (destination?.droppableId !== source.droppableId) {
      setToDos((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]];
        const taskObj = sourceBoard[source.index];
        const targetBoard = [...allBoards[destination.droppableId]];
        sourceBoard.splice(source.index, 1);
        targetBoard.splice(destination?.index, 0, taskObj);
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: targetBoard,
        };
      });
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <BigMain>
        <SideArea />
        <MainArea />
      </BigMain>
    </DragDropContext>
  );
}

export default App;
