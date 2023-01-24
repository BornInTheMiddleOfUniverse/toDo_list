import { useRecoilState, useRecoilValue } from "recoil";
import { toDoSelector, categoryState, CategoriesState } from "../atoms";
import CreateCategory from "./CreateCategory";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const categories = useRecoilValue(CategoriesState);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <div>
      <h1>To Dos</h1>
      <select value={category} onInput={onInput}>
        {categories.map((category: any) => (
          <option key={category.id} value={category.text}>
            {category.text}
          </option>
        ))}
      </select>
      <CreateCategory />
      <CreateToDo />
      {toDos.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
