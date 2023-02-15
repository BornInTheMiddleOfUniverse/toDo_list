import tw from "tailwind-styled-components";

export const Cards = tw.div<any>`flex flex-col w-full relative flex-wrap h-64 overflow-auto scroll `;
export const Card = tw.div`flex bg-red-100 w-full relative mb-3 h-8 text-[#000000cc] justify-between `;
export const Text = tw.span`text-xl`;
export const Btns = tw.div`flex`;
export const EditBtn = tw.button`hover:text-red-500`;
export const DoneBtn = tw.button` hover:text-red-500 ml-1`;
export const DeleteBtn = tw.button`hover:text-red-500 ml-1`;
