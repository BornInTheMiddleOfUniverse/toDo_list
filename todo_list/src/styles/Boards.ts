import tw from "tailwind-styled-components";

export const BoardCard = tw.div<any>` p-7 flex-col bg-white text-indigo-400`;
export const BoardHeader = tw.div<any>`flex justify-between align-middle`;
export const BoardTitle = tw.div`text-2xl`;
export const AddToDo = tw.div`flex align-middle`;
export const BoardBody = tw.div<any>` flex w-96 mt-6 flex-col fill-black flex-wrap absolute`;
