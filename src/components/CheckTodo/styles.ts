import styled from "styled-components";

type CheckTodoWrapperProps = {
  isEditingTodo: boolean;
};

export const CheckTodoWrapper = styled.div<CheckTodoWrapperProps>`
  width: 35px;
  height: 35px;
  border: 1px solid #e6e6e6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 25px;
    height: 25px;
    filter: invert(73%) sepia(73%) saturate(474%) hue-rotate(61deg)
      brightness(99%) contrast(106%);
    display: none;
  }

  visibility: ${(props) => (props.isEditingTodo ? "hidden" : "unset")};
`;
