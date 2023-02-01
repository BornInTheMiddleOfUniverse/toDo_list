import MainArea from "./components/MainArea";
import { BigMain } from "./styles/App";
import SideArea from "./components/SideArea";

function App() {
  return (
    <BigMain>
      <SideArea />
      <MainArea />
    </BigMain>
  );
}

export default App;
