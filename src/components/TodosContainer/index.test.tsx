import { render, screen } from "@testing-library/react";

import TodosContainer from ".";
import { TodoItemProps } from "../../context/todosContext";

let mockTodos: TodoItemProps[] = [
  {
    id: "1",
    description: "test",
    completed: false,
  },
  {
    id: "2",
    description: "test2",
    completed: true,
  },
];

const mockActiveTodos: TodoItemProps[] = [
  {
    id: "1",
    description: "test",
    completed: false,
  },
];

const mockCompletedTodos: TodoItemProps[] = [
  {
    id: "2",
    description: "test2",
    completed: true,
  },
];

jest.mock("../../context/todosContext", () => ({
  useTodosContext: () => {
    return {
      todos: mockTodos,
    };
  },
}));

jest.mock("../../hooks/useFilter", () => ({
  useFilter: () => {
    return {
      allTodos: mockTodos,
      activeTodos: mockActiveTodos,
      completedTodos: mockCompletedTodos,
      isFilterAll: true,
      isFilterActive: false,
      isFilterCompleted: false,
    };
  },
}));

jest.mock("../TodoInput", () => {
  return () => <div data-testid="TodoInput"></div>;
});

jest.mock("../TodoFooter", () => {
  return () => <div data-testid="TodoFooter"></div>;
});

describe("<TodosContainer />", () => {
  test("should render correctly", () => {
    render(<TodosContainer />);

    const TodoInputComponent = screen.getByTestId("TodoInput");
    const TodoFooterComponent = screen.getByTestId("TodoFooter");

    expect(TodoInputComponent).toBeInTheDocument();
    expect(TodoFooterComponent).toBeInTheDocument();
  });
});
