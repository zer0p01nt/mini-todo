import { Todo } from "../type";

type Props = {
  todo: Todo;
  checkTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const TodoItem = ({ todo, checkTodo, deleteTodo }: Props) => {
  return (
    <li className='flex justify-center mt-2 gap-2'>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={() => checkTodo(todo.id)}
        className='accent-green-500 hover:accent-black'
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
