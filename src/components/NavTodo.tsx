import { v4 as uuidv4 } from "uuid";
interface Props {
  categories: string[];
  numberOfIncompleteTodos: number;
  isAnyCompletedTodo: boolean;
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  onClearCompletedTodos: () => void;
}

export const NavTodo = ({
  categories,
  numberOfIncompleteTodos,
  isAnyCompletedTodo,
  activeCategory,
  onSelectCategory,
  onClearCompletedTodos,
}: Props) => {
  return numberOfIncompleteTodos > 0 || isAnyCompletedTodo ? (
    <div className="flex flex-row justify-between px-3 py-2">
      <p>
        {numberOfIncompleteTodos} item
        {numberOfIncompleteTodos === 1 ? " " : "s "}
        left
      </p>
      <div>
        {categories.map((cat) => (
          <button
            key={uuidv4()}
            onClick={() => onSelectCategory(cat)}
            className={
              "border rounded-md pl-1 pr-1 ml-2 mr-2 " +
              (activeCategory === cat
                ? "border-gray-300"
                : "hover:border-gray-200 border-transparent")
            }
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="w-32">
        {isAnyCompletedTodo ? (
          <button onClick={onClearCompletedTodos} className={"hover:underline"}>
            Clear completed
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  ) : (
    <></>
  );
};
