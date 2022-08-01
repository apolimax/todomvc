import styled from "styled-components";
import { RemoveTodoWrapper } from "../RemoveTodo/styles";
import { CheckTodoWrapper } from "../CheckTodo/styles";

export const TodoItemWrapper = styled.li`
  padding: 15px 17px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  color: #4d4d4d;

  border-bottom: 1px solid #f5f5f5;

  &:hover {
    ${RemoveTodoWrapper} {
      display: block;
    }
  }
`;

type TodoCheckNameProps = {
  isCompleted: boolean;
};

export const TodoCheckName = styled.div<TodoCheckNameProps>`
  display: flex;
  align-items: center;
  gap: 20px;

  p {
    text-decoration: ${(props) =>
      props.isCompleted ? "line-through" : "initial"};

    color: ${(props) => (props.isCompleted ? "#d9d9d9" : "#4d4d4d")};
  }

  ${CheckTodoWrapper} {
    border-color: ${(props) => (props.isCompleted ? "#4CFF4C" : "#f5f5f5")};

    img {
      display: ${(props) => (props.isCompleted ? "block" : "none")};
    }
  }
`;

export const EditTodoForm = styled.form`
  input {
    font-size: 1.5rem;
    color: inherit;
  }
`
