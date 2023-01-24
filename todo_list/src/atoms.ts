import { atom, selector } from "recoil";
import { ICategory, IGoal, IToDo } from "./interfaces";

//category
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

//todo
const USER_WORKS = "USER_WORKS";
const localStorageToDos: string = localStorage.getItem(USER_WORKS) || "[]";
const parsedLocalStorageToDos = JSON.parse(localStorageToDos);

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

//goal
const localStorageGoals: string = localStorage.getItem("GOALS") || "[]";
const parsedLocalStorageGoals = JSON.parse(localStorageGoals);

export const GoalState = atom<IGoal[]>({
  key: "goal",
  default: parsedLocalStorageGoals,
});
