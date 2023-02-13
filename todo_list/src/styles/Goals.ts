import tw from "tailwind-styled-components";

export const GoalsArea = tw.div`bg-[#8FCEC8] fill-white flex flex-col pt-16 pb-10 h-[400px]`;

export const WaveContainer = tw.div`h-28`;
export const WaveSvg = tw.svg`ml-5 mt-5 w-full -rotate-[23deg] overflow-visible `;
export const WaveText = tw.text`text-2xl tracking-widest`;

export const GoalsBody = tw.div`flex flex-col w-full h-full align-middle pl-11 pr-11 mt-5`;
export const GoalsForm = tw.form`w-64 top-52 z-10 absolute`;
export const GoalsInput = tw.input`w-full border-b-4 border-b-white bg-transparent`;
export const GoalsList = tw.ul`text-lg`;
export const Goal = tw.li``;

export const GoalsModal = tw.div`hidden absolute w-screen h-screen bg-black opacity-50  z-20 `;
export const GoalsModalBody = tw.div` top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed bg-[#8FCEC8] w-96 z-30 h-96 opacity-100
`;


