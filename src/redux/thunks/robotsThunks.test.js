import { mockRobots } from "../../mocks/mockRobots";
import {
  deleteRobotActionCreator,
  loadRobotsActionCreator,
} from "../features/robotsSlice";
import { deleteRobotsThunk, loadRobotsThunk } from "./robotsThunks";

describe("Given the robotThunks", () => {
  describe("When loadRobotsThunk it's invoked", () => {
    test("Then it should call dispatch loadRobotsActionCreator", async () => {
      const dispatch = jest.fn();
      const expectAction = loadRobotsActionCreator(mockRobots);

      const thunk = loadRobotsThunk();
      await thunk(dispatch);

      expect(dispatch).toBeCalledWith(expectAction);
    });
  });

  describe("When deleteRobotsThunk it's invoked", () => {
    test("Then it should call dispatch deleteRobotsActionCreator", async () => {
      const dispatch = jest.fn();
      const id = "627fa3a6acf0547ab56a505f";
      const expectAction = deleteRobotActionCreator(id);

      const thunk = deleteRobotsThunk(id);
      await thunk(dispatch);

      expect(dispatch).toBeCalledWith(expectAction);
    });
  });
});
