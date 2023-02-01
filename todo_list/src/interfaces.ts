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
  boardTitle: string;
}

export interface IGoal {
  id: number;
  text: string;
}
