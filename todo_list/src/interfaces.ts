export interface IForm {
  [key: string]: string;
}

export interface IToDo {
  id: number;
  text: string;
}

export interface IDraggableCardProps {
  area: string;
  text: string;
  id: number;
  index: number;
  boardTitle?: string;
}

export interface IDraggableBoardProps {
  boardTitle: string;
  index: number;
}

export interface IBoardProps {
  toDos: IToDo[];
  boardTitle: string;
}

//any
export interface IBoardCardProps {
  isDraggingOver: any;
  isDraggingFromThisWith: any;
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
export interface IModalProps {
  area: string;
}
