import { Todo } from "../type";

type Props = {
  todo: Todo;
  checkTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const TodoItem = ({ todo, checkTodo, deleteTodo }: Props) => {
  return (
    <li>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={() => checkTodo(todo.id)}
      />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </li>
  );
};

export default TodoItem;
