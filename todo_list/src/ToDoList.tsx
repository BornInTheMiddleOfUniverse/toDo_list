import { useState } from "react";
import { useForm } from "react-hook-form";

function ToDoList() {
  const { register, watch } = useForm();
  const [toDo, setToDo] = useState("");
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDo(value);
  };
  //   console.log("register", register("toDo"));
  //   console.log("watch", watch());
  return (
    <div>
      {/* todo list */}
      <div>
        <h1 className="text-2xl">To Dos</h1>
        <form className=" flex-col" onSubmit={onSubmit}>
          <input {...register("toDo")} placeholder="Write a To Do here" />
          <button>+</button>
        </form>
        {/* todos with category */}
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
