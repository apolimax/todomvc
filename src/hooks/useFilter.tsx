import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useTodosContext } from "../context/todosContext";

const useFilter = () => {
  const { filter = "All" } = useParams();
  const { todos } = useTodosContext();

  const [filterOption, setFilterOption] = useState(filter);

  const allTodos = useMemo(() => todos, [todos]);
  const activeTodos = useMemo(
    () => todos.filter((todo) => !todo.completed),
    [todos]
  );
  const completedTodos = useMemo(
    () => todos.filter((todo) => todo.completed),
    [todos]
  );

  useEffect(() => {
    setFilterOption(filter);
  }, [filter]);

  const isFilterAll = filterOption === "All";
  const isFilterActive = filterOption === "Active";
  const isFilterCompleted = filterOption === "Completed";

  return {
    allTodos,
    activeTodos,
    completedTodos,
    isFilterAll,
    isFilterActive,
    isFilterCompleted,
  };
};

export default useFilter;
