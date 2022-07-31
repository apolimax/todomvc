import { useState } from "react";
import { Link } from "react-router-dom";

import { useTodosContext } from "../../context/todosContext";

import * as S from "./styles";

const FILTER_TODOS = ["All", "Active", "Completed"];

const TodoFooter = () => {
  const { todos, setTodos, countActives } = useTodosContext();
  const [activeFilter, setActiveFilter] = useState("All");

  const todosLeft = () => todos.length - countActives();

  const clearCompleteds = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);

    setTodos(updatedTodos);
  };

  return (
    <S.TodoListFooter>
      <S.ItemsLeft>{todosLeft()} items left</S.ItemsLeft>
      <S.FilterTodos>
        {FILTER_TODOS.map((filter, idx) => (
          <S.FilterItem
            activeFilter={activeFilter}
            filter={filter}
            onClick={() => setActiveFilter(filter)}
            key={idx}
          >
            <Link to={`/${filter}`}>{filter}</Link>
          </S.FilterItem>
        ))}
      </S.FilterTodos>
      <S.ClearTodos countActives={countActives} onClick={clearCompleteds}>
        Clear completed
      </S.ClearTodos>
    </S.TodoListFooter>
  );
};

export default TodoFooter;
