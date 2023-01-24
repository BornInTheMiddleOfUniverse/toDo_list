import { useRecoilValue, useSetRecoilState } from "recoil";
import { CategoriesState, toDoState } from "../atoms";
import { IToDo } from "../interfaces";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const categories = useRecoilValue(CategoriesState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      const newToDos = [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
      localStorage.setItem("USER_WORKS", JSON.stringify(newToDos));

      return newToDos;
    });
  };

  return (
    <li>
      <span>{text}</span>
      {categories.map((category: any) => (
        <button key={category.id} name={category.category} onClick={onClick}>
          {category.category}
        </button>
      ))}
    </li>
  );
}

export default ToDo;
