import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "../LoginForm";

jest.mock("../../store/useAuthStore");

test("shows error for short password", async () => {
  render(<LoginForm />);
  fireEvent.change(screen.getByLabelText(/email address/i), {
    target: { value: "user@example.com" },
  });
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: "short" },
  });
  fireEvent.click(screen.getByRole("button", { name: /sign in/i }));
  expect(
    await screen.findByText(/password must be at least 8 characters/i)
  ).toBeInTheDocument();
});
