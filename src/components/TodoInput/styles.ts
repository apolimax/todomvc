import styled from "styled-components";

export const TodoInputWrapper = styled.form`
  input {
    width: 100%;
    border: none;
    padding: 16px 16px 16px 60px;
    box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
    line-height: 1.4em;
    font-size: 1.5rem;
    outline: none;

    &::placeholder {
      font-style: italic;
    }
  }
`;
