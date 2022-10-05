import { render, screen } from "@testing-library/react";

import TodoList from ".";

const mockProps = [
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

describe("<TodoList>", () => {
  test("should render correctly", () => {
    render(<TodoList TodoList={mockProps} />);

    const listElement = screen.getByRole("list");
    const listElementItems = screen.getAllByRole("listitem");

    expect(listElement).toBeInTheDocument();
    expect(listElementItems).toHaveLength(2);
  });
});
