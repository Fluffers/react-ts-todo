export interface Todo {
  text: string;
  checked: boolean;
  id: string;
}

export interface InputTodoProps {
  onTodoCreate: (text: Todo["text"]) => void;
  onToggleAllTodos: () => void;
}

export interface ItemTodoProps {
  todo: Todo;
  onToggleTodo: (id: Todo["id"]) => void;
}

export interface ListTodoProps {
  list: Array<Todo>;
  activeCategory: string;
  onToggleTodo: (id: Todo["id"]) => void;
}

export interface NavTodoProps {
  categories: string[];
  numberOfIncompleteTodos: number;
  isAnyCompletedTodo: boolean;
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  onClearCompletedTodos: () => void;
}
