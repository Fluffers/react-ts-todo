import { useState } from "react";
import { InputTodo } from "./InputTodo";
import { ListTodo } from "./ListTodo";
import { NavTodo } from "./NavTodo";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "../types";

export const App = () => {
  const todoCategories = ["all", "active", "completed"];
  const [todoList, setTodoList] = useState<Array<Todo>>([]);
  const [todoCategory, setTodoCategory] = useState<string>(todoCategories[0]);

  const addTodo = (text: Todo["text"]) => {
    setTodoList(() => [
      ...todoList,
      { text: text, checked: false, id: uuidv4() },
    ]);
  };

  const toggleTodo = (toggledTodoId: Todo["id"]) => {
    setTodoList((todoList) =>
      todoList.map((todo) => ({
        ...todo,
        checked: todo.id === toggledTodoId ? !todo.checked : todo.checked,
      }))
    );
  };

  const editTodo = (toggledTodoId: Todo["id"], text: string) => {
    setTodoList((todoList) =>
      todoList.map((todo) => ({
        ...todo,
        text: todo.id === toggledTodoId ? (todo.text = text) : todo.text,
      }))
    );
  };

  const deleteTodo = (toggledTodoId: Todo["id"]) => {
    setTodoList((todoList) =>
      todoList.filter((todo) => todo.id !== toggledTodoId)
    );
  };

  const selectTodoCategory = (category: string) => {
    setTodoCategory(category);
  };

  const clearCompletedTodos = () => {
    setTodoList((todoList) => todoList.filter((todo) => !todo.checked));
  };

  const toggleAllTodos = () => {
    setTodoList((todoList) =>
      todoList.map((todo) => ({
        ...todo,
        checked: todoList.some((todo) => !todo.checked),
      }))
    );
  };

  return (
    <div className="text-center max-w-xl m-auto flex flex-col">
      <h1 className="text-pink-300 text-4xl m-2">TODOS</h1>
      <div className="border border-solid border-gray-300 bg-white shadow-gray-300 shadow-lg">
        <InputTodo onTodoCreate={addTodo} onToggleAllTodos={toggleAllTodos} />
        <ListTodo
          list={todoList}
          activeCategory={todoCategory}
          onToggleTodo={toggleTodo}
          onEditTodo={editTodo}
          onDeleteTodo={deleteTodo}
        />
        <NavTodo
          numberOfIncompleteTodos={todoList.reduce(
            (counter, todo) => (todo.checked ? counter : counter + 1),
            0
          )}
          isAnyCompletedTodo={todoList.some((todo) => todo.checked)}
          categories={todoCategories}
          activeCategory={todoCategory}
          onSelectCategory={selectTodoCategory}
          onClearCompletedTodos={clearCompletedTodos}
        />
      </div>
    </div>
  );
};
