import { useRecoilState } from "recoil";
import {
  goalModalState,
  goalState,
  isGoalInStorageState,
} from "../../../atoms";
import Modal from "react-modal";
import {
  GoalsModalForm,
  GoalsModalBody,
  GoalsModalCloseBtn,
  GoalsModalInput,
  GoalsModalTitle,
  modalStyle,
} from "../../../styles/Goals";
import { useForm } from "react-hook-form";
import { IForm } from "../../../interfaces";
import { useEffect, useRef } from "react";

function GoalsModal() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const [goals, setGoals] = useRecoilState(goalState);
  const [goalModal, setGoalModal] = useRecoilState(goalModalState);
  const inputRef = useRef<HTMLInputElement>(null);

  const closeModal = () => {
    return setGoalModal(false);
  };

  const handleValid = ({ goal }: IForm) => {
    console.log("Adding a Goal", goal);
    setGoals((oldGoals) => {
      const newGoals = [{ text: goal, id: Date.now() }, ...oldGoals];
      localStorage.setItem("GOALS", JSON.stringify(newGoals));
      return newGoals;
    });
    setValue("goal", "");
    setGoalModal(false);
  };

  return (
    <Modal
      isOpen={goalModal}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style={modalStyle}
    >
      <GoalsModalBody>
        <GoalsModalCloseBtn onClick={closeModal}>×</GoalsModalCloseBtn>
        <GoalsModalTitle>
          <span>Add this week's goal.</span>
        </GoalsModalTitle>
        <GoalsModalForm onSubmit={handleSubmit(handleValid)}>
          <GoalsModalInput
            {...register("goal", {
              required: "Please write a goal.",
            })}
          />
        </GoalsModalForm>
      </GoalsModalBody>
    </Modal>
  );
}
export default GoalsModal;
