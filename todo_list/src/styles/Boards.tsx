import tw from "tailwind-styled-components";
import { IBoardCardProps } from "../interfaces";

//그런데 이거 계속 랜더링 되어야 하는거 아닌가?
// const BoardCardDraggingProps = ({isDraggingOver, isDraggingFromThisWith}:IBoardCardProps) => {
//     return isDraggingOver ? "bg-gray-200" : isDraggingFromThisWith ? "bg-gray-300" : "bg-transparent";
// };

export const BoardCard = tw.div` p-7 flex-col bg-white text-indigo-400 `;

export const BoardHeader = tw.div<any>`flex justify-between align-middle`;
export const BoardTitle = tw.div`text-2xl`;
export const AddToDo = tw.div`flex align-middle`;
export const BoardBody = tw.div<any>` flex w-96 mt-6 flex-col fill-black flex-wrap absolute`;
