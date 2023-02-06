export interface IForm {
  [key: string]: string;
}

export interface IToDo {
  id: number;
  onBoard: IBoard["boardTitle"];
  text: string;
}

export interface IBoard {
  id: number;
  boardTitle: string;
  toDos: IToDo[];
}

export interface IGoal {
  id: number;
  text: string;
}

export interface IDraggableCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}

export interface SvgProps {
  text: string;
  id: string;
  d: string;
  rotation?: boolean;
}