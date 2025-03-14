import { useState } from "react";

type Props = {
  addTodo: (text: string) => void;
  checkAll: (completed: boolean) => void;
  deleteAll: () => void;
};

const TodoControls = ({ addTodo, checkAll, deleteAll }: Props) => {
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className='flex flex-col gap-5'>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button className='' onClick={handleAddTodo}>
        추가
      </button>
      <button onClick={() => checkAll(true)}>전체 체크</button>
      <button onClick={() => checkAll(false)}>전체 체크 해제</button>
      <button onClick={deleteAll}>전체 삭제</button>
    </div>
  );
};

export default TodoControls;
