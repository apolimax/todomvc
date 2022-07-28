import { useTodosContext } from '../../context/todosContext';
import * as S from './styles'

const Header = () => {
  const {todos} = useTodosContext()

  return <S.Heading onClick={() => console.log('todos', todos)}>todos</S.Heading>;
};

export default Header;
