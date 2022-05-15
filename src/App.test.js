import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/store/store";

describe("Given an App component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a Header Component with with text 'Robotypedia'", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      );

      const header = screen.getByRole("heading", { name: "Robotypedia" });

      expect(header).toBeInTheDocument();
    });
  });
});
