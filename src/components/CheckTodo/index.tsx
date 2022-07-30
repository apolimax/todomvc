import * as S from "./styles";

type CheckTodoProps = {
  id: string;
  checkTodo: (id: string) => void;
};

const CheckTodo = ({ id, checkTodo }: CheckTodoProps) => {
  return (
    <S.CheckTodoWrapper onClick={() => checkTodo(id)}>
      <img src="./check.svg" alt="check todo" />
    </S.CheckTodoWrapper>
  );
};

export default CheckTodo;
