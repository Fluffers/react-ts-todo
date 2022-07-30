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

  const selectTodoCategory = (category: string) => {
    setTodoCategory(category);
  };

  return (
    <>
      <h1>TODOS</h1>
      <div>
        <InputTodo onTodoCreate={addTodo} />
        <ListTodo
          list={todoList}
          activeCategory={todoCategory}
          onToggleTodo={toggleTodo}
        />
        <NavTodo
          numberOfIncompleteTodos={todoList.reduce(
            (counter, todo) => (todo.checked ? counter : counter + 1),
            0
          )}
          categories={todoCategories}
          onSelectCategory={selectTodoCategory}
        />
      </div>
    </>
  );
};
