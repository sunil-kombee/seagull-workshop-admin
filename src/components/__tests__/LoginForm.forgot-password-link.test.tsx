import { render, screen } from "@testing-library/react";
import LoginForm from "../LoginForm";

test("shows the forgot your password link", () => {
  render(<LoginForm />);
  expect(screen.getByText(/forgot your password/i)).toBeInTheDocument();
});
