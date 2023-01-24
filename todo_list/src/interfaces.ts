export interface IForm {
  [key: string]: string;
}

export interface IToDo {
  text: string;
  id: number;
  category: ICategory;
}

export interface ICategory {
  id: number;
  category: string;
}

export interface IGoal {
  id: number;
  text: string;
}
