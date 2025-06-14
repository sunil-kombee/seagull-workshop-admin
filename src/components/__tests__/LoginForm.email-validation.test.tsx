import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "../LoginForm";

jest.mock("../../store/useAuthStore");

test("shows error for invalid email", async () => {
  render(<LoginForm />);
  fireEvent.change(screen.getByLabelText(/email address/i), {
    target: { value: "invalid" },
  });
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: "password123" },
  });
  fireEvent.click(screen.getByRole("button", { name: /sign in/i }));
  expect(await screen.findByText(/invalid email format/i)).toBeInTheDocument();
});
