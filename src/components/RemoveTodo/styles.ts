import styled from "styled-components";

export const RemoveTodoWrapper = styled.div`
  display: none;

  img {
    width: 24px;
    height: 24px;
    filter: invert(68%) sepia(76%) saturate(573%) hue-rotate(306deg)
      brightness(100%) contrast(91%);

    &:hover {
      filter: invert(32%) sepia(72%) saturate(4083%) hue-rotate(346deg)
        brightness(102%) contrast(93%);
    }
  }
`;
