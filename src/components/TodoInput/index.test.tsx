import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import TodoInput from ".";
import { TodoItemProps } from "../../context/todosContext";

const mockTodos: TodoItemProps[] = [];
const mockAddTodo = jest.fn();

jest.mock("../../context/todosContext", () => ({
  useTodosContext: () => {
    return {
      addTodo: mockAddTodo,
      todos: mockTodos,
      isAllTodosCompleted: jest.fn(() => false),
      toggleAllTodos: jest.fn(),
    };
  },
}));

describe("<TodoInput>", () => {
  test("should render correctly", () => {
    render(<TodoInput />);

    const formElement = screen.getByRole("form");
    const inputElement = screen.getByRole("textbox");
    const toggleButtonElement = screen.queryByText("❯");

    expect(formElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveFocus();
    expect(toggleButtonElement).not.toBeInTheDocument();
  });

  test("should let use type in", async () => {
    user.setup();
    render(<TodoInput />);

    const inputElement = screen.getByRole("textbox");
    await user.type(inputElement, "test");

    expect(inputElement).toHaveValue("test");
  });

  test("should empty the input field when the enter button is pressed", async () => {
    user.setup();
    render(<TodoInput />);

    const inputElement = screen.getByRole("textbox");
    await user.type(inputElement, "test");
    await user.keyboard("{Enter}");

    expect(inputElement).toHaveValue("");
  });

  test("should call addTodo function when the enter button is pressed", async () => {
    user.setup();
    render(<TodoInput />);

    const inputElement = screen.getByRole("textbox");
    await user.type(inputElement, "test");
    await user.keyboard("{Enter}");

    expect(mockAddTodo).toHaveBeenCalled();
  });
});
