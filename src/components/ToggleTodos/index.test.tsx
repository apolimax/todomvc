import { render, screen } from "@testing-library/react";

import ToggleTodos from ".";
import { TodoItemProps } from "../../context/todosContext";

let mockTodos: TodoItemProps[] = [];
jest.mock("../../context/todosContext", () => ({
  useTodosContext: () => {
    return {
      todos: mockTodos,
      isAllTodosCompleted: jest.fn(() => false),
      toggleAllTodos: jest.fn(),
    };
  },
}));

describe("<ToggleTodos>", () => {
  test("should render correctly", () => {
    render(<ToggleTodos />);

    const toggleButtonElement = screen.queryByText("❯");

    expect(toggleButtonElement).not.toBeInTheDocument();
  });

  test("should show caret sign when there is at least one todo", () => {
    mockTodos = [
      {
        id: "1",
        description: "test",
        completed: false,
      },
    ];
    render(<ToggleTodos />);

    const toggleButtonElement = screen.getByText("❯");
    expect(toggleButtonElement).toBeInTheDocument();
  });
});
