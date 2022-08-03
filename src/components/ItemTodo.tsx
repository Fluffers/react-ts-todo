import { useState } from "react";
import { ItemTodoProps } from "../types";
import clsx from "clsx";

export const ItemTodo = ({
  todo,
  onToggleTodo,
  onEditTodo,
  onDeleteTodo,
}: ItemTodoProps) => {
  const [isEditState, setIsEditState] = useState(false);
  const [inputVal, setInputVal] = useState(todo.text);

  const submit = () => {
    setIsEditState(false);

    if (inputVal.trim().length < 1) {
      onDeleteTodo(todo.id);
      return;
    }

    onEditTodo(todo.id, inputVal);
  };

  if (isEditState) {
    return (
      <form
        className="flex justify-between"
        onSubmit={(event) => {
          event.preventDefault();
          submit();
        }}
      >
        <input
          autoFocus
          type="text"
          className="p-3 ml-9 flex-grow shadow-gray-300 shadow-inner border border-gray-500"
          placeholder="What needs to be done?"
          value={inputVal}
          onChange={(event) => setInputVal(event.currentTarget.value)}
          onBlur={submit}
        ></input>
      </form>
    );
  }

  return (
    <div className="p-3 text-left flex border-b border-gray-300 group relative">
      <input
        type="checkbox"
        className="mr-3"
        checked={todo.checked}
        onChange={() => onToggleTodo(todo.id)}
      ></input>
      <span
        className={clsx({
          "pl-3 break-words overflow-hidden": true,
          "line-through text-gray-500 ease-in-out duration-300": todo.checked,
        })}
      >
        {inputVal}
      </span>
      <div className="absolute top-2 right-2">
        <button
          className="mr-2 group-hover:inline-block hidden"
          onClick={() => setIsEditState(true)}
          aria-label="Edit"
        >
          ✏️
        </button>
        <button
          className="mr-2 group-hover:inline-block hidden"
          onClick={() => onDeleteTodo(todo.id)}
          aria-label="Delete"
        >
          ✗
        </button>
      </div>
    </div>
  );
};
