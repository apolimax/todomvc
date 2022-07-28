import * as S from "./styles";

type CheckTodoProps = {
  id: string;
  checkTodo: (id: string) => void;
};

const CheckTodo = ({ id, checkTodo }: CheckTodoProps) => {
  return <S.CheckTodoWrapper onClick={() => checkTodo(id)} />
};

export default CheckTodo;
