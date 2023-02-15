import tw from "tailwind-styled-components";

export const BigMain = tw.div`grid grid-cols-[350px_minmax(900px,_auto)] font-signika h-screen`;
export const Side = tw.div`h-screen grid grid-rows-[64px_repeat(2,1fr)]`;
export const Main = tw.div<any>`flex bg-white h-screen row-span-2 w-full flex-col `;
