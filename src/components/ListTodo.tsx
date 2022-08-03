import { ItemTodo } from "./ItemTodo";
import { ListTodoProps, Todo, TodoCategory } from "../types";

const filterTodos = (todos: Array<Todo>, category: TodoCategory) => {
  if (category === "all") return todos;

  const shouldTodoBeChecked = category !== "active";

  return todos.filter((todo) => todo.checked === shouldTodoBeChecked);
};

export const ListTodo = ({
  list,
  activeCategory,
  onToggleTodo,
  onEditTodo,
  onDeleteTodo,
}: ListTodoProps) => {
  const filteredTodos = filterTodos(list, activeCategory);

  return (
    <div>
      {filteredTodos.map((todo) => (
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
