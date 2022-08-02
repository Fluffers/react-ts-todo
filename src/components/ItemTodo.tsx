import { Todo } from "../types";
import { ItemTodoProps } from "../types";

export const ItemTodo = ({
  todo,
  onToggleTodo,
  onEditTodo,
  onDeleteTodo,
}: ItemTodoProps) => {
  return (
    <div className="p-3 text-left flex border-b border-solid border-gray-300 group">
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
        {todo.text}
      </span>
      <button
        className="ml-auto group-hover:block hidden"
        onClick={() => onDeleteTodo(todo.id)}
      >
        ✗
      </button>
    </div>
  );
};
