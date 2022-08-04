import { useState, useEffect } from "react";
import { InputTodo } from "./InputTodo";
import { ListTodo } from "./ListTodo";
import { NavTodo } from "./NavTodo";
import { v4 as uuidv4 } from "uuid";
import { Todo, TodoCategory } from "../types";
import { todoCategories } from "../constants/todoCategories";

const getTododsFromLocalStorage = () => {
  const storedTodoList = localStorage.getItem("todoList");
  return !storedTodoList ? [] : JSON.parse(storedTodoList);
};
const todosFromLocalStorage = getTododsFromLocalStorage();

export const App = () => {
  const [todoList, setTodoList] = useState<Array<Todo>>(todosFromLocalStorage);
  const [todoCategory, setTodoCategory] = useState<TodoCategory>(
    todoCategories[0]
  );

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    const onSyncBetweenTabs = (event: StorageEvent) => {
      const { key, newValue } = event;
      if (key === "todoList") {
        setTodoList(!newValue ? [] : JSON.parse(newValue));
      }
    };
    window.addEventListener("storage", onSyncBetweenTabs);
    return () => {
      window.removeEventListener("storage", onSyncBetweenTabs);
    };
  }, []);

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
        text: todo.id === toggledTodoId ? text : todo.text,
      }))
    );
  };

  const deleteTodo = (toggledTodoId: Todo["id"]) => {
    setTodoList((todoList) =>
      todoList.filter((todo) => todo.id !== toggledTodoId)
    );
  };

  const selectTodoCategory = (category: TodoCategory) => {
    setTodoCategory(category);
  };

  const clearCompletedTodos = () => {
    setTodoList((todoList) => todoList.filter((todo) => !todo.checked));
  };

  const toggleAllTodos = () => {
    const shouldAllBeChecked = todoList.some((todo) => !todo.checked);
    setTodoList((todoList) =>
      todoList.map((todo) => ({
        ...todo,
        checked: shouldAllBeChecked,
      }))
    );
  };

  const numberOfIncompleteTodos = todoList.filter(
    (todo) => !todo.checked
  ).length;

  // TODO: more semantic elements

  return (
    <div className="text-center max-w-xl m-auto flex flex-col">
      <h1 className="text-pink-300 text-4xl m-2">TODOS</h1>
      <div className="border border-gray-300 bg-white shadow-gray-300 shadow-lg">
        <InputTodo onTodoCreate={addTodo} onToggleAllTodos={toggleAllTodos} />
        <ListTodo
          list={todoList}
          activeCategory={todoCategory}
          onToggleTodo={toggleTodo}
          onEditTodo={editTodo}
          onDeleteTodo={deleteTodo}
        />
        <NavTodo
          numberOfIncompleteTodos={numberOfIncompleteTodos}
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
