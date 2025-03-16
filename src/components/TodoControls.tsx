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
    <div className='mt-10 gap-5'>
      <div className='flex justify-center gap-5'>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
          maxLength={100}
          className='border-2 px-3 rounded-full border-green-500'
        />
        <button
          className='font-medium bg-green-500 p-2 rounded-full hover:bg-black hover:text-white'
          onClick={handleAddTodo}
        >
          추가
        </button>
      </div>
      <div className='flex justify-center gap-5 mt-10'>
        <button
          className='font-medium p-2 rounded-full border-2 border-green-500 hover:bg-green-500 hover:text-white'
          onClick={() => checkAll(true)}
        >
          전체 체크
        </button>
        <button
          className='font-medium p-2 rounded-full border-2 border-green-500 hover:bg-green-500 hover:text-white'
          onClick={() => checkAll(false)}
        >
          전체 체크 해제
        </button>
        <button
          className='font-medium p-2 rounded-full border-2 border-red-500 hover:bg-red-500 hover:text-white'
          onClick={deleteAll}
        >
          전체 삭제
        </button>
      </div>
    </div>
  );
};

export default TodoControls;
