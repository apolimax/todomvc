import styled from "styled-components";

type TodoInputWrapperProps = {
  showBorderBottom: boolean;
};

export const TodoInputWrapper = styled.form<TodoInputWrapperProps>`
  display: flex;
  align-items: center;

  border-bottom: ${(props) =>
    props.showBorderBottom ? "2px solid #e6e6e6" : ""};

  input {
    width: 100%;
    border: none;
    padding: 16px 16px 16px 0;

    line-height: 1.4em;
    font-size: 1.5rem;
    outline: none;
    color: #4d4d4d;

    &::placeholder {
      font-style: italic;
    }
  }
`;
