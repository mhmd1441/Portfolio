import { render, screen, within } from "@testing-library/react";
import App from "./App";

test("renders the portfolio landing page", () => {
  render(<App />);

  expect(
    screen.getByText(/mohamad moumneh/i, { selector: ".main-name" })
  ).toBeInTheDocument();

  // Scope to the main navigation: the footer repeats the same links.
  const nav = within(screen.getByRole("navigation"));
  expect(nav.getByRole("link", { name: /about/i })).toBeInTheDocument();
  expect(nav.getByRole("link", { name: /projects/i })).toBeInTheDocument();
  expect(nav.getByRole("link", { name: /resume/i })).toBeInTheDocument();
});

test("shows the 404 page for unknown routes", async () => {
  window.history.pushState({}, "", "/this-page-does-not-exist");
  render(<App />);

  expect(await screen.findByText(/page not found/i)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /back to home/i })).toBeInTheDocument();
});
