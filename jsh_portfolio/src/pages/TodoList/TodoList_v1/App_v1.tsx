import React from "react";
import type { TodoListItemType } from "./TodoList_v1";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList1";

type AppProps = {
  todoList: Array<TodoListItemType>;
  addTodo: (todo: string) => void;
  toggleTodo: (no: number) => void;
  deleteTodo: (no: number) => void;
};
const App_v1 = (props: AppProps) => {
  return (
    <div className="container mx-auto px-40 py-6">
      <div className="rounded-lg shadow-md p-4 bg-gray-100">
        <div className="text-xl font-bold">:: Todolist App</div>
      </div>
      <div className="rounded-lg shadow-md mt-4">
        <div className="p-4">
          <InputTodo addTodo={props.addTodo} />
          <TodoList
            todoList={props.todoList}
            toggleTodo={props.toggleTodo}
            deleteTodo={props.deleteTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default App_v1;
