import { NavTodoProps } from "../types";
import clsx from "clsx";

export const NavTodo = ({
  categories,
  numberOfIncompleteTodos,
  isAnyCompletedTodo,
  activeCategory,
  onSelectCategory,
  onClearCompletedTodos,
}: NavTodoProps) => {
  if (numberOfIncompleteTodos === 0 && !isAnyCompletedTodo) return null;

  return (
    <footer className="flex justify-between px-3 py-2">
      <p>
        {`${numberOfIncompleteTodos} ${
          numberOfIncompleteTodos === 1 ? "item" : "items"
        } left`}
      </p>
      <nav>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={clsx({
              "border rounded-md pl-1 pr-1 ml-2 mr-2": true,
              "border-gray-300": activeCategory === category,
              "hover:border-gray-200 border-transparent":
                activeCategory !== category,
            })}
          >
            {category}
          </button>
        ))}
      </nav>
      <p className="w-32">
        {isAnyCompletedTodo && (
          <button onClick={onClearCompletedTodos} className="hover:underline">
            Clear completed
          </button>
        )}
      </p>
    </footer>
  );
};
