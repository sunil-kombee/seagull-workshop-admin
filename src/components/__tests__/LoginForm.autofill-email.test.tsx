import { render, screen } from "@testing-library/react";
import LoginForm from "../LoginForm";

beforeEach(() => {
  localStorage.setItem("remembered_email", "remembered@example.com");
});
afterEach(() => {
  localStorage.clear();
});
test("autofills email from localStorage if remembered", () => {
  render(<LoginForm />);
  expect(screen.getByLabelText(/email address/i)).toHaveValue(
    "remembered@example.com"
  );
});
