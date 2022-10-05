import { render, screen } from "@testing-library/react";
import Header from ".";

describe("<Header />", () => {
  test("should render correctly", () => {
    render(<Header />);

    expect(screen.getByRole("heading", { name: "todos" })).toBeInTheDocument();
  });
});
