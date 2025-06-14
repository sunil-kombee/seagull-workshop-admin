import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "../LoginForm";

test("toggles the remember me checkbox", () => {
  render(<LoginForm />);
  const checkbox = screen.getByLabelText(/remember me/i);
  expect(checkbox).not.toBeChecked();
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
});
