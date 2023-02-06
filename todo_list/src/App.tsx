import MainArea from "./components/MainArea";
import { BigMain } from "./styles/App";
import SideArea from "./components/SideArea";
import { DragDropContext } from "react-beautiful-dnd";


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
