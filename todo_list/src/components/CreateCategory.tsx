import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { CategoriesState, categoryState, toDoState } from "../atoms";

interface IForm {
  category: string;
}

function CreateCategory() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setCategories = useSetRecoilState(CategoriesState);

  const handleValid = ({ category }: IForm) => {
    console.log("Adding a Category", category);
    setCategories((oldCategories: any) => {
      const newCategories = [
        { id: Date.now(), category: category },
        ...oldCategories,
      ];
      localStorage.setItem("CATEGORY_TITLES", JSON.stringify(newCategories));
      return newCategories;
    });

    setValue("category", "");
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input {...register("category")} placeholder="Create new category" />
      <button>+</button>
    </form>
  );
}

export default CreateCategory;
