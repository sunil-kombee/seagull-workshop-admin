import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "../LoginForm";

test("toggles password visibility when show/hide button is clicked", () => {
  render(<LoginForm />);
  const passwordInput = screen.getByLabelText(/password/i);
  const toggleButton = screen.getAllByRole("button")[0]; // first button is show/hide
  expect(passwordInput).toHaveAttribute("type", "password");
  fireEvent.click(toggleButton);
  expect(passwordInput).toHaveAttribute("type", "text");
  fireEvent.click(toggleButton);
  expect(passwordInput).toHaveAttribute("type", "password");
});
