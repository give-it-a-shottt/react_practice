import React, { useState } from "react";

type InputTodoProps = {
  addTodo: (todo: string) => void;
};

const InputTodo = (props: InputTodoProps) => {
  const [todo, setTodo] = useState<string>("");

  const addHandler = () => {
    props.addTodo(todo);
    setTodo("");
  };

  const enterInput = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addHandler();
    }
  };

  const changeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <div className="mb-4">
      <div className="w-full">
        <div className="flex gap-2">
          <input
            id="msg"
            type="text"
            className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="msg"
            placeholder="할일을 여기에 입력!"
            value={todo}
            onChange={changeTodo}
            onKeyUp={enterInput}
          />
          <button
            className="bg-blue-500 text-white px-4 py-3 rounded hover:bg-blue-600 cursor-pointer"
            onClick={addHandler}>
            추가
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputTodo;
