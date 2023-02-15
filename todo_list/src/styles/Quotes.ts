import tw from "tailwind-styled-components";

export const QuotesGrid = tw.div`grid row-span-1`;
export const QuotesArea = tw.div`bg-[#ffc0a9] flex flex-col fill-white justify-center`;
export const ArcContainer = tw.div`absolute mb-28 w-auto ml-[110px]`;
export const ArcSvg = tw.svg`relative mt-16 overflow-visible `;
export const ArcText = tw.text` text-3xl tracking-widest `;

export const QuotesBody = tw.div`flex flex-col items-center font-waterfall text-4xl text-white p-10 mt-28`;
export const Quote = tw.div``;
export const Author = tw.div`mt-10 place-self-center`;
