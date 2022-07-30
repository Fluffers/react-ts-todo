import { useState } from "react";
import { InputTodo } from "./InputTodo";
import { ListTodo } from "./ListTodo";
import { NavTodo } from "./NavTodo";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "../types";

export const App = () => {
  const [todoList, setTodoList] = useState<Array<Todo>>([]);

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

  return (
    <>
      <h1>TODOS</h1>
      <div>
        <InputTodo onTodoCreate={addTodo} />
        <ListTodo list={todoList} onToggleTodo={toggleTodo} />
        <NavTodo />
      </div>
    </>
  );
};
