import { render, screen } from "@testing-library/react";
import LoginForm from "../LoginForm";

test("password field is of type password by default", () => {
  render(<LoginForm />);
  expect(screen.getByLabelText(/password/i)).toHaveAttribute(
    "type",
    "password"
  );
});
