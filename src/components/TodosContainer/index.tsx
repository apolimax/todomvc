import { useTodosContext } from "../../context/todosContext";
import TodoInput from "../TodoInput";
import TodoList from "../TodoList";
import * as S from "./styles";

const TodosContainer = () => {
  const { todos } = useTodosContext();

  return (
    <S.TodosWrapper>
      <TodoInput />
      <TodoList TodoList={todos} />
    </S.TodosWrapper>
  );
};

export default TodosContainer;
