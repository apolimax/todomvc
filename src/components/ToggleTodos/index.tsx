import { useState } from "react";
import { useTodosContext } from "../../context/todosContext";
import * as S from "./styles";

const ToggleTodos = () => {
  const [isClicked, setIsClicked] = useState(false)
  const { toggleAllTodos } = useTodosContext();

  const toggle = () => {
    toggleAllTodos();
    setIsClicked(prevState => !prevState);
  }

  return (
    <S.ToggleTodosWrapper onClick={toggle} isBold={isClicked}>
      ❯
    </S.ToggleTodosWrapper>
  );
};

export default ToggleTodos;
