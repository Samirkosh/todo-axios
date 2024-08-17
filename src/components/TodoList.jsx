import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";
import { getAllTodo } from "../store/thunk/todoThunks";
import { List } from "./UI/StyledComponents";

export const TodoList = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((store) => store.myTodo);
  useEffect(() => {
    dispatch(getAllTodo());
  }, []);

  return (
    <List>
      {todos.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </List>
  );
};
