import styled from "styled-components";

export const TodoListFooter = styled.ul`
  font-size: 0.875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #777;

  padding: 10px 18px;
`;

export const ItemsLeft = styled.li``;

type FilterItemProps = {
  activeFilter: string;
  filter: string;
};

export const FilterItem = styled.div<FilterItemProps>`
  margin: 3px;
  padding: 3px 7px;
  border: 1px solid;
  cursor: pointer;
  
  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    border-color: rgba(175, 47, 47, 0.2);
    border-radius: 3px;
  }

  border-color: ${(props) =>
    props.filter === props.activeFilter
      ? "rgba(175, 47, 47, 0.2)"
      : "transparent"};
  border-radius: ${(props) =>
    props.filter === props.activeFilter ? "3px" : ""};
`;

export const FilterTodos = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

type ClearTodosProps = {
  countActives: () => number;
};

export const ClearTodos = styled.li<ClearTodosProps>`
  visibility: ${(props) => (props.countActives() > 0 ? "visible" : "hidden")};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;