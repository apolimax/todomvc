import styled from "styled-components";
import { RemoveTodoWrapper } from "../RemoveTodo/styles";

export const TodoItemWrapper = styled.li`
  padding: 5px 8px;
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
    text-decoration: ${(props) => (props.isCompleted ? "line-through" : "initial")};
  }
`;