import { useTodosContext } from "../../context/todosContext";
import useFilter from "../../hooks/useFilter";
import TodoFooter from "../TodoFooter";
import TodoInput from "../TodoInput";
import TodoList from "../TodoList";
import * as S from "./styles";

const TodosContainer = () => {
  const { todos } = useTodosContext();

  const {
    allTodos,
    activeTodos,
    completedTodos,
    isFilterAll,
    isFilterActive,
    isFilterCompleted,
  } = useFilter();

  return (
    <S.TodosWrapper>
      <TodoInput />
      {isFilterAll && <TodoList TodoList={allTodos} />}
      {isFilterActive && <TodoList TodoList={activeTodos} />}
      {isFilterCompleted && <TodoList TodoList={completedTodos} />}
      {todos.length > 0 && <TodoFooter />}
    </S.TodosWrapper>
  );
};

export default TodosContainer;
