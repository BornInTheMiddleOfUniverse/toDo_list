import { useRecoilState, useRecoilValue } from "recoil";
import {
  toDoSelector,
  categoryState,
  CategoriesState,
  ICategory,
} from "../atoms";
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

      <select value={category.category} onInput={onInput}>
        {categories.map((category: ICategory) => (
          <option key={category.id} value={category.category}>
            {category.category}
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
