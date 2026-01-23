import React, { useState } from "react";
import type { TodoListItemType } from "./TodoList_v1";
import TodoListItem from "./TodoListItem";

type TodoListProps = {
  todoList: Array<TodoListItemType>;
  toggleTodo: (no: number) => void;
  deleteTodo: (no: number) => void;
};

const TodoList = (props: TodoListProps) => {
  let items = props.todoList.map((item) => {
    return (
      <TodoListItem
        key={item.no}
        todoItem={item}
        deleteTodo={props.deleteTodo}
        toggleDone={props.toggleTodo}
      />
    );
  });

  return (
    <div className="mb-4">
      {" "}
      <div className="w-full">
        <ul className="space-y-2">{items}</ul>
      </div>
    </div>
  );
};

export default TodoList;
