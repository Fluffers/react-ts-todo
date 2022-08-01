import { Todo } from "../types";

interface ListTodoProps {
  list: Array<Todo>;
  activeCategory: string;
  onToggleTodo: (id: Todo["id"]) => void;
}

export const ListTodo = ({
  list,
  activeCategory,
  onToggleTodo,
}: ListTodoProps) => {
  const selectCategory = (value: boolean) => {
    switch (activeCategory) {
      case "all":
        return true;
      case "active":
        return value === false;
      case "completed":
        return value === true;
    }
  };

  return (
    <div>
      {list
        .filter((todo) => selectCategory(todo.checked))
        .map((todo) => (
          <div
            key={todo.id}
            className="p-3 text-left flex border-b border-solid border-gray-300"
          >
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
          </div>
        ))}
    </div>
  );
};
