import { Todo } from "../types";

interface ListTodoProps {
  list: Array<Todo>;
  onToggleTodo: (id: Todo["id"]) => void;
}

export const ListTodo = ({ list, onToggleTodo }: ListTodoProps) => {
  return (
    <div>
      {list.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.checked}
            onChange={() => onToggleTodo(todo.id)}
          ></input>
          {todo.text}
        </div>
      ))}
    </div>
  );
};
