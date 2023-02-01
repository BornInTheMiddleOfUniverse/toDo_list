import tw from "tailwind-styled-components";

export const GoalsArea = tw.div`bg-[#8FCEC8] fill-white flex pt-16 pb-10 `;

export const WaveContainer = tw.div`h-28 absolute`;
export const WaveSvg = tw.svg`ml-5 mt-5 w-full -rotate-[23deg] overflow-visible `;
export const WaveText = tw.text`text-2xl tracking-widest`;

export const GoalsBody = tw.div`flex w-full h-full align-middle justify-center p-10 `;
export const GoalsForm = tw.form` mt-20 w-full z-10`;
export const GoalsInput = tw.input`w-full border-b-4 border-b-white bg-transparent`;

export const GoalsModal = tw.div`hidden absolute w-screen h-screen bg-black opacity-50  z-20 `;
export const GoalsModalBody = tw.div` top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed bg-[#8FCEC8] w-96 z-30 h-96 opacity-100
`;
