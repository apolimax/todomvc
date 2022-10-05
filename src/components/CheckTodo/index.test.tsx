import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import CheckTodo from ".";

const CheckTodoProps = {
  id: "1",
  checkTodo: jest.fn(),
  isEditingTodo: false,
};

describe("<CheckTodo />", () => {
  test("should render correctly", () => {
    render(<CheckTodo {...CheckTodoProps} />);

    const checkTodo = screen.getByRole("checkbox");

    expect(checkTodo).toBeInTheDocument();
  });

  test("should call checkTodo function when component is clicked", async () => {
    user.setup();
    render(<CheckTodo {...CheckTodoProps} />);

    const checkTodo = screen.getByRole("checkbox");
    await user.click(checkTodo);
    expect(CheckTodoProps.checkTodo).toHaveBeenCalled();
    expect(CheckTodoProps.checkTodo).toHaveBeenCalledWith(CheckTodoProps.id);
  });

  test("should hid the component when the todo is being edited", () => {
    render(<CheckTodo {...CheckTodoProps} isEditingTodo={true} />);

    const checkTodo = screen.queryByRole("checkbox");
    expect(checkTodo).not.toBeInTheDocument();
  });
});
