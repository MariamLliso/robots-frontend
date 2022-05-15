import Header from "./Header";
import { render, screen } from "@testing-library/react";

describe("Given an Header component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a list", () => {
      render(<Header />);

      const list = screen.getByRole("list");

      expect(list).toBeInTheDocument();
    });

    test("Then it should render a heading with text 'Robotypedia'", () => {
      render(<Header />);

      const heading = screen.getByRole("heading", { name: "Robotypedia" });

      expect(heading).toBeInTheDocument();
    });
  });
});
