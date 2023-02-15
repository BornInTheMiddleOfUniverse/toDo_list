import tw from "tailwind-styled-components";

export const GoalsGrid = tw.div`grid row-span-2`;
export const GoalsArea = tw.div`bg-[#8FCEC8] fill-white flex flex-col align-middle justify-center `;

export const WaveContainer = tw.div`h-28 mt-5`;
export const WaveSvg = tw.svg`ml-5 mt-5 pt-5 w-full -rotate-[23deg] overflow-visible `;
export const WaveText = tw.text`text-2xl tracking-widest`;

export const GoalsBody = tw.div`flex flex-col w-full h-full align-middle pl-11 pr-11 mt-10`;
export const GoalsForm = tw.form`w-64 top-52 z-10 absolute`;
export const AddGoal = tw.div`w-full border-b-4 border-b-white bg-transparent text-[#ffffffa8] text-lg italic hover:cursor-pointer`;
export const GoalsList = tw.ul`text-lg`;
export const Goal = tw.li`mb-3`;
