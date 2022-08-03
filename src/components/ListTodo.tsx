import { ItemTodo } from "./ItemTodo";
import { ListTodoProps } from "../types";

export const ListTodo = ({
  list,
  activeCategory,
  onToggleTodo,
  onEditTodo,
  onDeleteTodo,
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
          <ItemTodo
            onToggleTodo={onToggleTodo}
            onEditTodo={onEditTodo}
            onDeleteTodo={onDeleteTodo}
            todo={todo}
            key={todo.id}
          />
        ))}
    </div>
  );
};
