import TodoItem from "../TodoItem";
import * as S from "./styles";

export type TodoItemProps = {
  id: string;
  description: string;
  completed: boolean;
};

type TodoListProps = {
  TodoList: TodoItemProps[];
};

const TodoList = ({ TodoList }: TodoListProps) => (
  <S.TodoListWrapper>
    {TodoList.map((todo) => (
      <TodoItem key={todo.id} {...todo} />
    ))}
  </S.TodoListWrapper>
);

export default TodoList;
