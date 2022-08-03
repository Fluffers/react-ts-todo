import { todoCategories } from "../constants/todoCategories";

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
  onEditTodo: (id: Todo["id"], text: string) => void;
  onDeleteTodo: (id: Todo["id"]) => void;
}

export interface ListTodoProps {
  list: Array<Todo>;
  activeCategory: TodoCategory;
  onToggleTodo: (id: Todo["id"]) => void;
  onEditTodo: (id: Todo["id"], text: string) => void;
  onDeleteTodo: (id: Todo["id"]) => void;
}

export interface NavTodoProps {
  categories: typeof todoCategories;
  numberOfIncompleteTodos: number;
  isAnyCompletedTodo: boolean;
  activeCategory: TodoCategory;
  onSelectCategory: (category: TodoCategory) => void;
  onClearCompletedTodos: () => void;
}

export type TodoCategory = typeof todoCategories[number];
