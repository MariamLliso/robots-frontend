import mockRobots from "../../mocks/mockRobots";
import { loadRobotsActionCreator } from "../features/robotsSlice";
import { loadRobotsThunk } from "./robotsThunks";

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
});
