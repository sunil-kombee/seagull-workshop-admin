import { render, screen } from "@testing-library/react";
import LoginForm from "../LoginForm";

jest.mock("../../store/useAuthStore");

describe("LoginForm", () => {
  it("renders email, password fields, sign in button, and remember me checkbox", () => {
    render(<LoginForm />);
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /sign in/i })
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/remember me/i)).toBeInTheDocument();
  });
});
