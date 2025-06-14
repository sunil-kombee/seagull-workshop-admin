import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LoginForm from "../LoginForm";

jest.mock("../../store/useAuthStore");

test("disables the sign in button while submitting", async () => {
  render(<LoginForm />);
  fireEvent.change(screen.getByLabelText(/email address/i), {
    target: { value: "user@example.com" },
  });
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: "password123" },
  });
  fireEvent.click(screen.getByRole("button", { name: /sign in/i }));
  await waitFor(() =>
    expect(screen.getByRole("button", { name: /signing in/i })).toBeDisabled()
  );
});
