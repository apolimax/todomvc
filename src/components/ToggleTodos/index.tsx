import { useTodosContext } from "../../context/todosContext";
import * as S from "./styles";

const ToggleTodos = () => {
  const { toggleAllTodos, todos, isAllTodosCompleted } = useTodosContext();

  const toggle = () => {
    toggleAllTodos();
  };

  const isThereTodoToToggle = !!todos.length;
  const isArrowBold = isAllTodosCompleted();

  return (
    <S.ToggleTodosWrapper
      onClick={toggle}
      isBold={isArrowBold}
      showToggle={isThereTodoToToggle}
    >
      {isThereTodoToToggle && "❯"}
    </S.ToggleTodosWrapper>
  );
};

export default ToggleTodos;
