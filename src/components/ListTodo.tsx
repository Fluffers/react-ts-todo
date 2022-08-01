import { Todo } from "../types";
import { ItemTodo } from "./ItemTodo";
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
          <ItemTodo onToggleTodo={onToggleTodo} todo={todo} key={todo.id} />
        ))}
    </div>
  );
};
