import { atom, selector } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: ICategory;
}

export interface ICategory {
  id: number;
  category: string;
}

const USER_WORKS = "USER_WORKS";
const localStorageToDos: string = localStorage.getItem(USER_WORKS) || "[]";
const parsedLocalStorageToDos = JSON.parse(localStorageToDos);

const defaultCategoreis = JSON.stringify([
  { id: 1, category: "To Do" },
  { id: 2, category: "Doing" },
  { id: 3, category: "Done" },
]);

const localStorageCategories: string =
  localStorage.getItem("CATEGORY_TITLES") || defaultCategoreis;
const parsedLocalStorageCategories = JSON.parse(localStorageCategories);

export const CategoriesState = atom({
  key: "categories",
  default: parsedLocalStorageCategories,
});

export const categoryState = atom<ICategory>({
  key: "category",
  default: { id: 1, category: "To Do" },
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
    return toDos.filter((toDo) => toDo.category === category);
  },
});
