export interface IForm {
  [key: string]: string;
}

export interface IToDo {
  text: string;
  id: number;
  board: IBoard;
}

export interface IBoard {
  id: number;
  board: string;
}

export interface IGoal {
  id: number;
  text: string;
}
