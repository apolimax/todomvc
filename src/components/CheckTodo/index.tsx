import * as S from "./styles";

type CheckTodoProps = {
  id: string;
  checkTodo: (id: string) => void;
  isEditingTodo: boolean;
};

const CheckTodo = ({ id, checkTodo, isEditingTodo }: CheckTodoProps) => {
  return (
    <S.CheckTodoWrapper  isEditingTodo={isEditingTodo} onClick={() => checkTodo(id)}>
      <img src="./check.svg" alt="check todo" />
    </S.CheckTodoWrapper>
  );
};

export default CheckTodo;
