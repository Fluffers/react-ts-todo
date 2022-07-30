import { v4 as uuidv4 } from "uuid";
interface Props {
  categories: string[];
  numberOfIncompleteTodos: number;
  onSelectCategory: (category: string) => void;
  onClearCompletedTodos: () => void;
}

export const NavTodo = ({
  categories,
  numberOfIncompleteTodos,
  onSelectCategory,
  onClearCompletedTodos,
}: Props) => {
  return (
    <div>
      <p>{numberOfIncompleteTodos} items left</p>
      <div>
        {categories.map((cat) => (
          <button
            key={uuidv4()}
            onClick={() => onSelectCategory(cat)}
            style={{ margin: "0 10px 0 10px" }}
          >
            {cat}
          </button>
        ))}
      </div>
      <button onClick={onClearCompletedTodos}>clear completed</button>
    </div>
  );
};
