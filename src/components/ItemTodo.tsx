import { useState } from "react";
import { Todo } from "../types";
import { ItemTodoProps } from "../types";

export const ItemTodo = ({
  todo,
  onToggleTodo,
  onEditTodo,
  onDeleteTodo,
}: ItemTodoProps) => {
  const [isEditState, setIsEditState] = useState(false);
  const [inputVal, setInputVal] = useState(todo.text);

  const submit = () => {
    if (inputVal.trim().length < 1) {
      onDeleteTodo(todo.id);
    } else {
      onEditTodo(todo.id, inputVal);
    }
    setIsEditState(false);
  };

  return isEditState ? (
    <form
      className=" flex flex-row justify-between"
      onSubmit={(event) => {
        event.preventDefault();
        submit();
      }}
    >
      <input
        autoFocus
        type="text"
        className="p-3 ml-9 flex-grow shadow-gray-300 shadow-inner border border-solid border-gray-500"
        placeholder="What needs to be done?"
        value={inputVal}
        onChange={(event) => setInputVal(event.target.value)}
        onBlur={(event) => {
          event.preventDefault();
          submit();
        }}
      ></input>
    </form>
  ) : (
    <div className="p-3 text-left flex border-b border-solid border-gray-300 group relative">
      <input
        type="checkbox"
        className="mr-3"
        checked={todo.checked}
        onChange={() => onToggleTodo(todo.id)}
      ></input>
      <span
        className={
          "pl-3 break-words" +
          (todo.checked
            ? " line-through text-gray-500 ease-in-out duration-300"
            : "")
        }
      >
        {inputVal}
      </span>
      <div className="absolute top-2 right-2 ">
        <button
          className="mr-2 group-hover:inline-block hidden "
          onClick={() => {
            setIsEditState(true);
          }}
        >
          ✏️
        </button>
        <button
          className="mr-2 group-hover:inline-block hidden"
          onClick={() => onDeleteTodo(todo.id)}
        >
          ✗
        </button>
      </div>
    </div>
  );
};
