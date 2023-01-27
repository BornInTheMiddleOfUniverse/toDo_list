import { atom, selector } from "recoil";
import { IBoard, IGoal, IToDo } from "./interfaces";

//board
const defaultCategoreis = JSON.stringify([
  { id: 1, board: "To Do" },
  { id: 2, board: "Doing" },
  { id: 3, board: "Done" },
]);

const localStorageBoards: string =
  localStorage.getItem("BOARD_TITLES") || defaultCategoreis;
export const parsedLocalStorageBoards = JSON.parse(localStorageBoards);

export const boardsState = atom({
  key: "boards",
  default: parsedLocalStorageBoards,
});

export const boardState = atom<IBoard>({
  key: "board",
  default: { id: 1, board: "To Do" },
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
    const board = get(boardState);
    return toDos.filter((toDo) => toDo.board === board);
  },
});

//goal
const localStorageGoals: string = localStorage.getItem("GOALS") || "[]";
const parsedLocalStorageGoals = JSON.parse(localStorageGoals);

export const GoalState = atom<IGoal[]>({
  key: "goal",
  default: parsedLocalStorageGoals,
});
