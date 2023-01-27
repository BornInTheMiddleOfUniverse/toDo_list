import Goals from "./components/Goals";
import Quotes from "./components/Quotes";
import BoardArea from "./components/BoardArea";

function App() {
  return (
    <div className="grid grid-cols-[350px_minmax(900px,_1fr)] grid-rows-[minmax(400px,_1.3fr)_minmax(150px,_1fr)] font-signika">
      <Goals />
      <BoardArea />
      <Quotes />
    </div>
  );
}

export default App;
