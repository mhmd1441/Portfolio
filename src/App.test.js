import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the portfolio landing page", () => {
  render(<App />);

  expect(
    screen.getByText(/mohamad moumneh/i, { selector: ".main-name" })
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /projects/i })).toBeInTheDocument();
});
