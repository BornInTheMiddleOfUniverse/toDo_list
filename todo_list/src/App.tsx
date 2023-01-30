import Goals from "./components/Goals";
import Quotes from "./components/Quotes";
import MainArea from "./components/MainArea";
import { BigMain } from "./styles/App";

function App() {
  return (
    <BigMain>
      <Goals />
      <MainArea />
      <Quotes />
    </BigMain>
  );
}

export default App;
