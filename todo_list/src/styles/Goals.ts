import tw from "tailwind-styled-components";

export const GoalsArea = tw.div`bg-[#8FCEC8] fill-white flex flex-col align-middle justify-center h-[400px]`;

export const WaveContainer = tw.div`h-28`;
export const WaveSvg = tw.svg`ml-5 mt-5 pt-5 w-full -rotate-[23deg] overflow-visible `;
export const WaveText = tw.text`text-2xl tracking-widest`;

export const GoalsBody = tw.div`flex flex-col w-full h-full align-middle pl-11 pr-11 mt-10`;
export const GoalsForm = tw.form`w-64 top-52 z-10 absolute`;
export const GoalsInput = tw.input`w-full border-b-4 border-b-white bg-transparent`;
export const GoalsList = tw.ul`text-lg`;
export const Goal = tw.li`mb-3`;

export const OpenGoalModal = tw.span`hover:cursor-pointer text-4xl text-white place-self-end mr-12 mb-7`;

export const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
  },
};
export const GoalsModalBody = tw.div`top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed bg-[#8FCEC8] w-96 z-30 h-96 flex flex-col align-middle justify-center rounded-sm p-10`;
export const GoalsModalTitle = tw.div` mb-10 -mt-5 text-2xl text-white`;
export const GoalsModalForm = tw.form`w-full`;
export const GoalsModalInput = tw.input`border-b-4 border-b-white w-full bg-transparent`;
export const GoalsModalCloseBtn = tw.button`absolute top-4 right-5 text-4xl text-white`;
