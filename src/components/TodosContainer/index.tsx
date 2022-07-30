import { useTodosContext } from "../../context/todosContext";
import TodoFooter from "../TodoFooter";
import TodoInput from "../TodoInput";
import TodoList from "../TodoList";
import * as S from "./styles";

const TodosContainer = () => {
  const { todos } = useTodosContext();

  return (
    <S.TodosWrapper>
      <TodoInput />
      <TodoList TodoList={todos} />
      {todos.length > 0 && <TodoFooter />}
    </S.TodosWrapper>
  );
};

export default TodosContainer;
