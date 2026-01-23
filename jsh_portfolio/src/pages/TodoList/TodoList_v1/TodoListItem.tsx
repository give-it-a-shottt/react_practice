import React from "react";
import type { TodoListItemType } from "./TodoList_v1";

type TodoListItemProps = {
  todoItem: TodoListItemType;
  toggleDone: (no: number) => void;
  deleteTodo: (no: number) => void;
};

const TodoListItem = (props: TodoListItemProps) => {
  let itemClassName =
    "border border-gray-300 rounded p-3 flex justify-between items-center";
  if (props.todoItem.done) itemClassName += " bg-green-100 border-green-300";

  return (
    <li className={itemClassName}>
      <span
        className={`cursor-pointer ${props.todoItem.done ? "line-through text-gray-500" : ""}`}
        onClick={() => props.toggleDone(props.todoItem.no)}>
        {props.todoItem.todo}
        {props.todoItem.done ? " (완료)" : ""}
      </span>
      <button
        className="bg-gray-500 text-white text-xs px-2 py-1 rounded hover:bg-gray-600 cursor-pointer"
        onClick={() => props.deleteTodo(props.todoItem.no)}>
        삭제
      </button>
    </li>
  );
};

export default TodoListItem;
