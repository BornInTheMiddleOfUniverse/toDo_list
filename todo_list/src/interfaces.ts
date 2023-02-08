export interface IForm {
  [key: string]: string;
}


export interface IToDo {
  id: number;
  text: string;
}

export interface IDraggableToDoProps {
  toDoText: IToDo["text"];
  toDoId: IToDo["id"];
  index: number;
}

export interface IBoardProps {
  toDos: IToDo[];
  boardTitle: string;
}

export interface IToDoState {
  [key: string]: IToDo[];
}

export interface IGoal {
  id: number;
  text: string;
}

export interface SvgProps {
  text: string;
  id: string;
  d: string;
  rotation?: boolean;
}