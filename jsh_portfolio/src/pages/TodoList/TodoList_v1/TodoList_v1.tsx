import { produce } from "immer";
import { useState } from "react";
import App_v1 from "./App_v1";

export type TodoListItemType = {
  no: number;
  todo: string;
  done: boolean;
};

// src/pages/TodoList/TodoListV1.tsx
function TodoListV1() {
  const [todoList, setTodoList] = useState<Array<TodoListItemType>>([
    { no: 1, todo: "리액트 공부하기", done: false },
    { no: 2, todo: "타입스크립트 공부하기", done: true },
    { no: 3, todo: "JS 공부하기", done: false },
    { no: 4, todo: "HTML 공부하기", done: false },
    { no: 5, todo: "CSS 공부하기", done: false },
  ]);
  const addTodo = (todo: string) => {
    let newTodoList = produce(todoList, (draft: any) => {
      draft.push({ no: new Date().getTime(), todo: todo, done: false });
    });
    setTodoList(newTodoList);
  };

  const deleteTodo = (no: number) => {
    let index = todoList.findIndex((todo) => todo.no === no);
    let newTodoList = produce(todoList, (draft: any) => {
      draft.splice(index, 1);
    });
    setTodoList(newTodoList);
  };

  const toggleTodo = (no: number) => {
    let index = todoList.findIndex((todo) => todo.no === no);
    let newTodoList = produce(todoList, (draft: any) => {
      draft[index].done = !draft[index].done;
    });
    setTodoList(newTodoList);
  };
  return (
    <App_v1
      todoList={todoList}
      addTodo={addTodo}
      deleteTodo={deleteTodo}
      toggleTodo={toggleTodo}
    />
  );
}

export default TodoListV1;
