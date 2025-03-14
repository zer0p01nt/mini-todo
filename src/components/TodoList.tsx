import TodoItem from "./TodoItem";
import { Todo } from "../type";

type Props = {
  todos: Todo[];
  checkTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const TodoList = ({ todos, checkTodo, deleteTodo }: Props) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          checkTodo={checkTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
