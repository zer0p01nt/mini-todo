import "./App.css";
import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoControls from "./components/TodoControls";
import { Todo } from "./type";

const LOCAL_STORAGE_KEY = "todos";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const checkTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const checkAll = (completed: boolean) => {
    setTodos(todos.map((todo) => ({ ...todo, completed })));
  };

  const deleteAll = () => {
    setTodos([]);
  };

  return (
    <div>
      <h1>꼭꼭 확인하세요 🍀</h1>
      <TodoControls
        addTodo={addTodo}
        checkAll={checkAll}
        deleteAll={deleteAll}
      />
      <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
