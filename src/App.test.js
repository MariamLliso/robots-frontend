import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given an App component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a Header Component with with text 'Robotypedia'", () => {
      render(<App />);

      const header = screen.getByRole("heading", { name: "Robotypedia" });

      expect(header).toBeInTheDocument();
    });
  });
});
