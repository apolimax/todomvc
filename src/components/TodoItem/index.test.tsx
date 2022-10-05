import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import "jest-styled-components";

import TodoItem from ".";
import { TodoItemProps } from "../../context/todosContext";

const mockTodos: TodoItemProps[] = [
  {
    id: "1",
    description: "test",
    completed: false,
  },
  {
    id: "2",
    description: "test2",
    completed: false,
  },
];
const mockMarkTodoAsComplete = jest.fn();
const mockedSetTodos = jest.fn();

jest.mock("../../context/todosContext", () => ({
  useTodosContext: () => {
    return {
      markTodoAsComplete: mockMarkTodoAsComplete,
      todos: mockTodos,
      setTodos: mockedSetTodos,
    };
  },
}));

const mockProps = {
  id: "1",
  description: "test",
  completed: false,
};

describe("<TodoItem>", () => {
  test("should render correctly", () => {
    render(<TodoItem {...mockProps} />);

    const todoItem = screen.getByText(mockProps.description);
    const checkTodoElement = screen.getByRole("checkbox");
    const removeTodoElement = screen.getByLabelText("remove todo item");

    expect(todoItem).toBeInTheDocument();
    expect(checkTodoElement).toBeInTheDocument();
    expect(removeTodoElement).toHaveStyle("display: none");
  });

  test("should show an input with its value filled when the item text is double clicked", async () => {
    user.setup();
    render(<TodoItem {...mockProps} />);

    const todoItem = screen.getByText(mockProps.description);
    await user.dblClick(todoItem);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue(mockProps.description);
  });

  test("should call setTodos function when the user tries to edit the todo text by pressing the enter button", async () => {
    user.setup();
    render(<TodoItem {...mockProps} />);

    const todoItem = screen.getByText(mockProps.description);
    await user.dblClick(todoItem);
    await user.keyboard("{Enter}");
    expect(mockedSetTodos).toHaveBeenCalled();
  });
});
