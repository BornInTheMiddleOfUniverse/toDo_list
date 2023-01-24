import { atom, selector } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: string;
}

const USER_WORKS = "USER_WORKS";
const localStorageToDos: string = localStorage.getItem(USER_WORKS) || "[]";
const parsedLocalStorageToDos = JSON.parse(localStorageToDos);

export const CategoriesState = atom({
  key: "categories",
  default: [
    { id: 1, text: "To Do" },
    { id: 2, text: "Doing" },
    { id: 3, text: "Done" },
  ],
});

export const categoryState = atom<IToDo["text"]>({
  key: "category",
  default: "TO_DO",
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: parsedLocalStorageToDos,
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.text === category);
  },
});
