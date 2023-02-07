import MainArea from "./components/screen/mainArea/MainArea";
import SideArea from "./components/screen/sideArea/SideArea";
import { DragDropContext } from "react-beautiful-dnd";
import { BigMain } from "./styles/App";


const onDragEnd = () => {
  console.log("dragging finished");
}

function App() {
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
