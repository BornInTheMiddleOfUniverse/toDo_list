import Goals from "./components/Goals";
import Quotes from "./components/Quotes";
import BoardArea from "./components/BoardArea";
import { BigMain } from "./styles/App";

function App() {
  return (
    <BigMain>
      <Goals />
      <BoardArea />
      <Quotes />
    </BigMain>
  );
}

export default App;
