import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "../LoginForm";

jest.mock("../../store/useAuthStore");

test("does not show validation errors for valid input", async () => {
  render(<LoginForm />);
  fireEvent.change(screen.getByLabelText(/email address/i), {
    target: { value: "user@example.com" },
  });
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: "password123" },
  });
  fireEvent.click(screen.getByRole("button", { name: /sign in/i }));
  expect(screen.queryByText(/invalid email format/i)).not.toBeInTheDocument();
  expect(
    screen.queryByText(/password must be at least 8 characters/i)
  ).not.toBeInTheDocument();
});
