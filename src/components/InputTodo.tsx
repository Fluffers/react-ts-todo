import { useState } from "react";
import { Todo } from "../types";
import { InputTodoProps } from "../types";

export const InputTodo = ({
  onTodoCreate,
  onToggleAllTodos,
}: InputTodoProps) => {
  const [inputVal, setInputVal] = useState("");

  return (
    <form
      className="bg-slate-50 flex flex-row justify-between border-b border-solid border-gray-300 shadow-gray-300 shadow-inner"
      onSubmit={(event) => {
        event.preventDefault();
        if (inputVal.trim().length < 1) return false;
        onTodoCreate(inputVal);
        setInputVal("");
      }}
    >
      <button type="button" className="m-3" onClick={onToggleAllTodos}>
        ✓
      </button>
      <input
        type="text"
        className="p-3 flex-grow placeholder:italic placeholder:text-slate-400 shadow-gray-300 shadow-inner"
        placeholder="What needs to be done?"
        value={inputVal}
        onChange={(event) => setInputVal(event.target.value)}
      ></input>
    </form>
  );
};
