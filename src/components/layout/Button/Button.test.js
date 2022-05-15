import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given the Button component", () => {
  describe("When it's invoked", () => {
    test("Then it should be visible in the DOM", () => {
      render(<Button />);

      const theButton = screen.getByRole("button");

      expect(theButton).toBeInTheDocument();
    });
  });

  describe("When invoked with the text 'text'", () => {
    test("Then it should render the text 'text' on the rendered Button", () => {
      const expectedButtonText = "text";

      render(<Button text={"text"} />);

      const ButtonText = screen.getByText(expectedButtonText);

      expect(ButtonText).toBeInTheDocument();
    });
  });

  describe("When invoked with an action", () => {
    test("Then it should call the action when is clicked", () => {
      const action = jest.fn();

      render(<Button action={action} />);

      const button = screen.getByRole("button");
      userEvent.click(button);

      expect(action).toHaveBeenCalled();
    });
  });
});
