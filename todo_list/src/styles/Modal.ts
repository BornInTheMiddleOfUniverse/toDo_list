import tw from "tailwind-styled-components";

export const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
  },
};
export const OpenGoalModalBtn = tw.span`hover:cursor-pointer text-4xl text-white place-self-end mr-12 mb-7`;

export const ModalBody = tw.div`top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed bg-[#8FCEC8] w-96 z-30 h-96 flex flex-col align-middle justify-center rounded-sm p-10`;
export const ModalTitle = tw.div` mb-10 -mt-5 text-2xl text-white`;
export const ModalForm = tw.form`w-full`;
export const ModalInput = tw.input`border-b-4 border-b-white w-full bg-transparent`;
export const ModalCloseBtn = tw.button`absolute top-4 right-5 text-4xl text-white`;
