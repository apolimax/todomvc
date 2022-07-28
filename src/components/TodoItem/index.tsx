import { useTodosContext } from "../../context/todosContext";
import CheckTodo from "../CheckTodo";
import RemoveTodo from "../RemoveTodo";
import { TodoItemProps } from "../TodoList";
import * as S from "./styles";

const TodoItem = ({ ...props }: TodoItemProps) => {
  const { markTodoAsComplete } = useTodosContext();

  return (
    <S.TodoItemWrapper>
      <S.TodoCheckName isCompleted={props.completed}>
        <CheckTodo id={props.id} checkTodo={markTodoAsComplete} />
        <p>{props.description}</p>
      </S.TodoCheckName>
      <RemoveTodo id={props.id} />
    </S.TodoItemWrapper>
  );
};

export default TodoItem;
