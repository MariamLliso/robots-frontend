import { render, screen } from "@testing-library/react";
import { mockRobot } from "../../mocks/mockRobots";
import Robot from "./Robot";

describe("Given an Robot component", () => {
  describe("When it's invoked with a mocked Robot", () => {
    test("Then it should render a heading of level 2 with text 'K-9'", () => {
      render(<Robot robot={mockRobot} />);

      const headerName = screen.getByRole("heading", { name: "K-9", level: 2 });

      expect(headerName).toBeInTheDocument();
    });

    test("Then it should render a heading of level 3 with text 'Created on'", () => {
      render(<Robot robot={mockRobot} />);

      const headerCreated = screen.getByRole("heading", {
        name: "Created on",
        level: 3,
      });

      expect(headerCreated).toBeInTheDocument();
    });
  });

  describe("When it's invoked with a mocked Robot with '2022-05-14T22:33:00.890Z'", () => {
    test("Then it should render a heading of level 3 with text '14-5-2022'", () => {
      render(<Robot robot={mockRobot} />);

      const date = screen.getByRole("heading", {
        name: "14-5-2022",
        level: 3,
      });

      expect(date).toBeInTheDocument();
    });
  });
});
