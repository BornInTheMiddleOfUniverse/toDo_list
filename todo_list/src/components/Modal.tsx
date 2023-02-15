import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { goalState, modalState } from "../atoms";
import { IForm, IModalProps } from "../interfaces";
import Modal from "react-modal";
import {
  ModalBody,
  ModalCloseBtn,
  ModalForm,
  ModalInput,
  modalStyle,
  ModalTitle,
} from "../styles/Modal";

function ModalArea({ area }: IModalProps) {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const [goals, setGoals] = useRecoilState(goalState);

  const [isModal, isSetModal] = useRecoilState(modalState);

  const closeModal = () => {
    return isSetModal(false);
  };

  const handleValid = ({ goal }: IForm) => {
    if (area == "goal") {
      console.log("Adding a Goal", goal);
      setGoals((oldGoals) => {
        const newGoals = [{ text: goal, id: Date.now() }, ...oldGoals];
        localStorage.setItem("GOALS", JSON.stringify(newGoals));
        return newGoals;
      });
      setValue("isModal", "");
      isSetModal(false);
    }
  };

  return (
    <Modal
      isOpen={isModal}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style={modalStyle}
    >
      <ModalBody>
        <ModalCloseBtn onClick={closeModal}>×</ModalCloseBtn>
        <ModalTitle>
          <span>Add this week's goal.</span>
        </ModalTitle>
        <ModalForm onSubmit={handleSubmit(handleValid)}>
          <ModalInput
            {...register("goal", {
              required: "Please write a goal.",
            })}
          />
        </ModalForm>
      </ModalBody>
    </Modal>
  );
}
export default ModalArea;
