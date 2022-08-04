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
    <div className="p-3 text-left flex border-b border-gray-300 group">
      <input
        type="checkbox"
        className="mr-3"
        checked={todo.checked}
        onChange={() => onToggleTodo(todo.id)}
      ></input>
      <span
        className={clsx({
          "pl-3 break-words overflow-hidden flex-grow": true,
          "line-through text-gray-500 ease-in-out duration-300": todo.checked,
        })}
      >
        {inputVal}
      </span>
      <div className="flex w-12 space-x-2 invisible group-focus-within:visible group-hover:visible items-center">
        <button
          className="w-6"
          onClick={() => setIsEditState(true)}
          aria-label="Edit"
        >
          <span aria-hidden="true">✏️</span>
        </button>
        <button
          className="w-6"
          onClick={() => onDeleteTodo(todo.id)}
          aria-label="Delete"
        >
          <span aria-hidden="true">✗</span>
        </button>
      </div>
    </div>
  );
};
