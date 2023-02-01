import { atom, selector } from "recoil";
import { IBoard, IGoal, IToDo } from "./interfaces";

//goal
export const goalsState = atom({
  key: "goals",
  default: { id: 123, goal: "Wake up early at 7:00" },
});

//board
const defaultCategoreis = JSON.stringify([
  { id: 1, boardTitle: "Monday" },
  { id: 2, boardTitle: "Tuesday" },
  { id: 3, boardTitle: "Wednesday" },
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
  default: { id: 1, boardTitle: "Monday" },
});

//todo
const BOARD_TITLE = "BOARD_TITLE";
const localStorageToDos: string = localStorage.getItem(BOARD_TITLE) || "[]";
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
