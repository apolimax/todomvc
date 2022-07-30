import styled from "styled-components";

type ToggleTodosWrapperProps = {
  isBold: boolean;
};

export const ToggleTodosWrapper = styled.div<ToggleTodosWrapperProps>`
  cursor: default;
  font-size: 22px;

  color: ${(props) => (props.isBold ? "#737373" : "#e6e6e6")};

  padding: 10px 27px 10px 27px;
  transform: rotate(90deg);
`;
