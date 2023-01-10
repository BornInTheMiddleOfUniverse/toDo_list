import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";
import ToDoList from "./ToDoList";

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
      {/* Date Header*/}
      {/* Timely Schedule */}
      <ToDoList />
      {/* notes */}
    </>
  );
}

export default App;
